const scene = new THREE.Scene();

// Panel

const panel = new THREE.Group();

// Cube

let texture = new THREE.TextureLoader().load("../textures/solar-texture.jpeg");
let geometry = new THREE.BoxGeometry(20, 1, 40);
let material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);

panel.add(cube);

// Outlines

const outline = new THREE.Group();

geometry = new THREE.BoxGeometry(20, 1, 0.5);
material = new THREE.MeshBasicMaterial({ color: "white" });

const outline1 = new THREE.Mesh(geometry, material);
const outline2 = new THREE.Mesh(geometry, material);

geometry = new THREE.BoxGeometry(1, 1, 40.9);
material = new THREE.MeshBasicMaterial({ color: "white" });

const outline3 = new THREE.Mesh(geometry, material);
const outline4 = new THREE.Mesh(geometry, material);

geometry = new THREE.BoxGeometry(1, 0.5, 40.9);
material = new THREE.MeshBasicMaterial({ color: "white" });

const outline5 = new THREE.Mesh(geometry, material);

geometry = new THREE.BoxGeometry(19, 2, 0.7);
material = new THREE.MeshBasicMaterial({ color: "white" });

const outline6 = new THREE.Mesh(geometry, material);

outline1.position.set(0, 0, 20.2);
outline2.position.set(0, 0, -20.2);
outline3.position.set(10.5, 0, 0);
outline4.position.set(-10.5, 0, 0);
outline5.position.set(1, 0.5, -0.01);
outline6.position.set(0.3, 0.6, -0.1);
panel.position.set(-2.5, 26.4, 0.3);

outline.add(outline1);
outline.add(outline2);
outline.add(outline3);
outline.add(outline4);
outline.add(outline5);
outline.add(outline6);

panel.add(outline);

let rotationIndex = 1100;
let rotationDirection = true;

const panelRotation = () => {
  requestAnimationFrame(panelRotation);
  panel.rotation.z = Math.PI / (rotationIndex / 1000);
  if (rotationIndex === 1400) {
    rotationDirection = false;
  }
  if (rotationIndex === 1100) {
    rotationDirection = true;
  }
  if (rotationDirection) {
    rotationIndex += 2.5;
  } else {
    rotationIndex -= 2.5;
  }
};

panelRotation();
scene.add(panel);
//water
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
// Planes

texture = new THREE.TextureLoader().load("../textures/sand.jpeg");
geometry = new THREE.PlaneGeometry(100, 100, 100);
material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide,
});
const planes = new THREE.Mesh(geometry, material);

planes.position.set(0, -10, 0);
planes.rotation.x = Math.PI / 2;

scene.add(planes);

// Support
texture = new THREE.TextureLoader().load("../textures/metal-texture.jpeg");
geometry = new THREE.BoxGeometry(10, 1, 10);
material = new THREE.MeshBasicMaterial({ color: "white" });
const support = new THREE.Mesh(geometry, material);

support.position.set(-4.2, -9, 0.2);

scene.add(support);

// Stand

const stands = new THREE.Group();

geometry = new THREE.CylinderGeometry(0.8, 0.8, 35.5, 64);
material = new THREE.MeshBasicMaterial({map: texture})
const stand1 = new THREE.Mesh(geometry, material);

stand1.position.set(-4.2, 9, 0.2);

stands.add(stand1);
scene.add(stands);

// Axes Helper

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(20, 100, 150);
camera.lookAt(cube.position);
const pointLight = new THREE.PointLight("#fff", 1.5);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);
//controller

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  canvas: canvas,
  antialias: true,
});

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = false;
  controls.enablePan = false;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene.background = new THREE.Color(0x272928);
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
// animate();

function controlAnimation() {
  requestAnimationFrame(controlAnimation);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
}

controlAnimation();
