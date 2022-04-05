// Canvas

const canvas = document.querySelector(".webgl");

// Scene

const scene = new THREE.Scene();
//axesHelper

const axesHelper = new THREE.AxesHelper(0);
scene.add(axesHelper);

//grid

let gridHelper = new THREE.GridHelper(0, 0);
scene.add(gridHelper);
const all = new THREE.Group();
//land
loader = new THREE.TextureLoader();
loader.load("../textures/sand.jpeg", function (texture) {
  const land = new THREE.Mesh(
    new THREE.SphereGeometry(30, 128),
    new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.1,
    })
  );
  all.add(land);
  land.position.y = -80;
  const land2 = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),
    new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: texture,
    })
  );
  scene.add(land2);
  land2.rotation.x = Math.PI * 0.5;
  land2.position.y = -90;
});
const params = {
  color: "#00b4d8",
  scale: 10,
  flowX: 1,
  flowY: 1,
};

const waterGeometry = new THREE.PlaneGeometry(1000, 1000);

water = new Water(waterGeometry, {
  color: params.color,
  scale: params.scale,
  flowDirection: new THREE.Vector2(params.flowX, params.flowY),
  textureWidth: 1024,
  textureHeight: 1024,
});
water.rotation.x = Math.PI * 1.5;
water.position.y = -80;

scene.add(water);




let geometry = new THREE.SphereGeometry( 500, 60, 40 );
geometry.scale( - 1, 1, 1 );
let material = new THREE.MeshBasicMaterial( {
  map: new THREE.TextureLoader().load( '../textures/cloud3.jpg' )
} );
mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

//fan

const windTurbine = new THREE.Group();
material = new THREE.MeshStandardMaterial({
  color: "white",
  roughness: 0.5,
});

const stand = new THREE.Mesh(
  new THREE.CylinderGeometry(0.6, 2, 50, 128),
  new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
);
stand.position.setY(-25);

const box = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 4),
  new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
);
box.position.setZ(-1);

const capsule = new THREE.Mesh(
  new THREE.ConeGeometry(1, 3, 32),
  new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
);
capsule.rotation.x = Math.PI * 0.5;
capsule.position.set(0, 0, 2);
windTurbine.add(capsule);

const blades = new THREE.Group();

const blade1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 8, 0.2),
  new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
);
const blade2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 8, 0.2),
  new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
);
const blade3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 8, 0.2),
  new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
);

blade1.position.set(-2 * Math.sqrt(3), 2, 1.5);
blade1.rotateZ(Math.PI / 3);

blade2.position.set(2 * Math.sqrt(3), 2, 1.5);
blade2.rotateZ(-Math.PI / 3);

blade3.position.set(0, -4, 1.5);

blades.add(blade1);
blades.add(blade2);
blades.add(blade3);
windTurbine.add(box);
windTurbine.add(blades);
windTurbine.add(stand);
all.add(windTurbine);
scene.add(all);

//camera
const camera = new THREE.PerspectiveCamera(75, 800 / 600);

scene.add(camera);
camera.position.set(20, 0, 20);
const pointLight = new THREE.PointLight("#fff", 1.5);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);
camera.position.z = 150;
all.position.set(40,0,0)

//render
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// controls
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.update();

  renderer.render(scene, camera);
}
const clock = new THREE.Clock();
function spin() {
  pointLight.position.x = camera.position.x;
  pointLight.position.y = camera.position.y;
  pointLight.position.z = camera.position.z;
  requestAnimationFrame(spin);
  blades.rotation.z += 0.05;
  blades.updateMatrix();
  renderer.render(scene, camera);
  const elapsedTime = clock.getElapsedTime();
  // windTurbine.rotation.y = elapsedTime * 1.5;
}

spin();
animate();
