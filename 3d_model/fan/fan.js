// Canvas

const canvas = document.querySelector(".webgl");

// Scene

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x152744);
//axesHelper

const axesHelper = new THREE.AxesHelper(0);
scene.add(axesHelper);
const all = new THREE.Group()
//grid

var materials = [
  new THREE.MeshLambertMaterial({
      color:"white"
  }),
  new THREE.MeshLambertMaterial({
    color:"white"
}),
new THREE.MeshLambertMaterial({
  color:"white"
}),
new THREE.MeshLambertMaterial({
  color:"white"
}),
new THREE.MeshLambertMaterial({
  color:"white"
}),
new THREE.MeshLambertMaterial({
  color:0x4d9872
}),
 
];

let gridHelper = new THREE.GridHelper(0, 0);
scene.add(gridHelper);

const land1 = new THREE.Mesh(
    new THREE.BoxGeometry(100,70,2),
    materials
    
)
land1.rotation.x = Math.PI * 0.5
land1.position.y = -50


const land2 = new THREE.Mesh(
  new THREE.BoxGeometry(100,10,2),
  materials
)
land2.rotation.x = Math.PI * 0.25
land2.position.set(0,-47,37)

const land3 = new THREE.Mesh(
  new THREE.BoxGeometry(100,25,2),
  materials
  
)
land3.rotation.x = Math.PI * 0.5
land3.position.set(0,-43.7,52 )

const land4 = new THREE.Mesh(
  new THREE.BoxGeometry(20,20,2),
  materials
  
)
land4.rotation.x = Math.PI * 0.5
land4.position.set(-80,-50,-10 )
all.add(land3)
all.add(land2)
all.add(land1)
all.add(land4)
//land
// loader = new THREE.TextureLoader();
// loader.load("../textures/sand.jpeg", function (texture) {
//   const land = new THREE.Mesh(
//     new THREE.SphereGeometry(30, 128),
//     new THREE.MeshStandardMaterial({
//       map: texture,
//       roughness: 0.1,
//     })
//   );
//   all.add(land);
//   land.position.y = -80;
//   const land2 = new THREE.Mesh(
//     new THREE.PlaneGeometry(1000, 1000),
//     new THREE.MeshBasicMaterial({
//       side: THREE.DoubleSide,
//       map: texture,
//     })
//   );
//   scene.add(land2);
//   land2.rotation.x = Math.PI * 0.5;
//   land2.position.y = -90;
// });
// const params = {
//   color: "#00b4d8",
//   scale: 10,
//   flowX: 1,
//   flowY: 1,
// };

// const waterGeometry = new THREE.PlaneGeometry(1000, 1000);

// water = new Water(waterGeometry, {
//   color: params.color,
//   scale: params.scale,
//   flowDirection: new THREE.Vector2(params.flowX, params.flowY),
//   textureWidth: 1024,
//   textureHeight: 1024,
// });
// water.rotation.x = Math.PI * 1.5;
// water.position.y = -80;

// scene.add(water);

// let geometry = new THREE.SphereGeometry(500, 60, 40);
// geometry.scale(-1, 1, 1);
// let material = new THREE.MeshBasicMaterial({
//   map: new THREE.TextureLoader().load("../textures/cloud3.jpg"),
// });
// mesh = new THREE.Mesh(geometry, material);
// mesh.position.y = 50
// scene.add(mesh);
//tree
//trunk
const tree = new THREE.Group()
const trunk = new THREE.Mesh(
  new THREE.CylinderGeometry(3, 5, 15, 128),
  new THREE.MeshLambertMaterial({ color: 0xFDC6B4})
);
trunk.position.set(-30,-43,-25)
scene.add(trunk)
const branch1 = new THREE.Mesh(
  new THREE.ConeGeometry(13, 20, 128),
  new THREE.MeshLambertMaterial({ color: 0x78C77F})
);
branch1.position.set(-30,-28,-25)
scene.add(branch1)
const branch2 = new THREE.Mesh(
  new THREE.ConeGeometry(10, 20, 128),
  new THREE.MeshLambertMaterial({ color: 0x78C77F})
);
branch2.position.set(-30,-17,-25)
tree.add(trunk,branch1,branch2)
tree.position.set(-50,0,15)
all.add(tree)

//fan
var windTurbines = [];
var blades = [];

for (let i = 0; i < 3; i++) {
  windTurbines.push(new THREE.Group());
  let material = new THREE.MeshStandardMaterial({
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
  windTurbines[i].add(capsule);

  blades.push(new THREE.Group());

  var blade1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 8, 0.2),
    new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
  );
  var blade2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 8, 0.2),
    new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
  );
  var blade3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 8, 0.2),
    new THREE.MeshStandardMaterial({ color: "white", roughness: 0.1 })
  );

  blade1.position.set(-2 * Math.sqrt(3), 2, 1.5);
  blade1.rotateZ(Math.PI / 3);

  blade2.position.set(2 * Math.sqrt(3), 2, 1.5);
  blade2.rotateZ(-Math.PI / 3);

  blade3.position.set(0, -4, 1.5);

  blades[i].add(blade1);
  blades[i].add(blade2);
  blades[i].add(blade3);

  windTurbines[i].add(box);
  windTurbines[i].add(blades[i]);
  windTurbines[i].add(stand);
  all.add(windTurbines[i]);
}
windTurbines[0].position.set(35,6,55)
windTurbines[0].rotation.y = -Math.PI * 0.25
windTurbines[1].position.set(-40,0,-20)
windTurbines[1].rotation.y = -Math.PI * 0.5
windTurbines[2].position.set(-40,0,15)
windTurbines[2].rotation.y = -Math.PI * 0.5
scene.add(all)
all.position.set(50,0,-15)
// all.rotation.y = Math.PI * 0.250


//camera
const camera = new THREE.PerspectiveCamera(80,1280 / 720);

scene.add(camera);
camera.position.set(0, 0, 0);
const pointLight = new THREE.PointLight("#fff", 1.5);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);
camera.position.z = 150;
camera.position.y = 100;

//render
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

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
  blades[0].rotation.z += 0.1;
  blades[0].updateMatrix();
  blades[1].rotation.z += 0.1;
  blades[1].updateMatrix();
  blades[2].rotation.z += 0.1;
  blades[2].updateMatrix();
  all.rotation.y += 0.005

  renderer.render(scene, camera);
  const elapsedTime = clock.getElapsedTime();
  // windTurbine.rotation.y = elapsedTime * 1.5;
  if (
    (camera.position.x < 0 && camera.position.z < 0) ||
    (camera.position.x > 0 && camera.position.z < 0)
  ) {
    if (direction === "left") {
      direction = "right";
      move();
    }
    // infoCont.style.justifyContent = "flex-end";
    // infoCont.style.left = (window.innerWidth - 740).toString() + "px";
  } else {
    if (direction === "right") {
      direction = "left";
      move();
    }
    // infoCont.style.justifyContent = "flex-start";
    // infoCont.style.left = "0px";
  }
}
spin();
animate();
