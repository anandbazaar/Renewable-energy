const scene = new THREE.Scene();
// Panel
const all = new THREE.Group()
const panel = new THREE.Group();
const wires =  new THREE.Group();

// Cube

let texture = new THREE.TextureLoader().load("../textures/solar-texture.jpeg");
let geometry = new THREE.BoxGeometry(20, 1, 40);
let material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);

panel.add(cube);
// Wire

//  geometry = new THREE.BoxGeometry(1, 1, 30);
//  material = new THREE.MeshBasicMaterial({ color: "white" });
//  const wire = new THREE.Mesh(geometry, material);
//  const wire2 = new THREE.Mesh(geometry, material);

//  wire.position.set(-4,30,20);
//  wire2.position.set(11,30,35);

// wire2.rotation.y = Math.PI / 2;

// wires.add(wire);
// wires.add(wire2);

// geometry = new THREE.BoxGeometry(2, 2, 2);
// material = new THREE.MeshBasicMaterial({ color: "grey" });
// const turn = new THREE.Mesh(geometry, material);

// turn.position.set(-4,30,35);

// wires.add(turn);

// scene.add(wires);

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
panel.position.set(80, 56.4, -80.3);

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
const waterGeometry = new THREE.PlaneGeometry(10000, 10000);


water = new Water(waterGeometry, {
  
  color: params.color,
  scale: params.scale,
  flowDirection: new THREE.Vector2(params.flowX, params.flowY),
  textureWidth: 1024,
  textureHeight: 1024,
});
water.rotation.x = Math.PI * 1.5;
water.position.y = -15;


// Support

texture = new THREE.TextureLoader().load("../textures/metal-texture.jpeg");
geometry = new THREE.BoxGeometry(10, 1, 10);
material = new THREE.MeshBasicMaterial({ color: "white" });
const support = new THREE.Mesh(geometry, material);

support.position.set(80, 20, -80.2);

scene.add(support);

// Land
var materials = [
  new THREE.MeshBasicMaterial({
      color:"white"
  }),
  new THREE.MeshBasicMaterial({
    color:"white"
}),
new THREE.MeshBasicMaterial({
  color:"white"
}),
new THREE.MeshBasicMaterial({
  color:"white"
}),
new THREE.MeshBasicMaterial({
  color:"white"
}),
new THREE.MeshBasicMaterial({
  color:0x4d9872
}),
 
];


const land1 = new THREE.Mesh(
    new THREE.BoxGeometry(200,200,10),
    materials

)
const land2 = new THREE.Mesh(
  new THREE.BoxGeometry(200,100,10),
  materials

)
land1.rotation.x = Math.PI * 0.5;
land2.rotation.x = Math.PI * 0.5;

land1.position.set(20,10,0);
land2.position.set(70,10,0);
scene.add(land1);
scene.add(land2);


// Tree

const tree = new THREE.Group()
const tree2 = new THREE.Group()
const trunk = new THREE.Mesh(
  new THREE.CylinderGeometry(3, 5, 15, 128),
  new THREE.MeshBasicMaterial({ color: 0xFDC6B4})
);
const trunk2 = new THREE.Mesh(
  new THREE.CylinderGeometry(4, 6, 15, 128),
  new THREE.MeshBasicMaterial({ color: 0xFDC6B4})
);
trunk.position.set(-30,-43,-25)
trunk2.position.set(-30,-43,-25)
scene.add(trunk)
const branch3 = new THREE.Mesh(
  new THREE.ConeGeometry(14, 21, 128),
  new THREE.MeshBasicMaterial({ color: 0x78C77F})
);
branch3.position.set(-30,-28,-25)
const branch1 = new THREE.Mesh(
  new THREE.ConeGeometry(13, 20, 128),
  new THREE.MeshBasicMaterial({ color: 0x78C77F})
);
branch1.position.set(-30,-28,-25)
scene.add(branch1)
const branch4 = new THREE.Mesh(
  new THREE.ConeGeometry(11, 21, 128),
  new THREE.MeshBasicMaterial({ color: 0x78C77F})
);
branch4.position.set(-30,-17,-25)
const branch2 = new THREE.Mesh(
  new THREE.ConeGeometry(10, 20, 128),
  new THREE.MeshBasicMaterial({ color: 0x78C77F})
);
branch2.position.set(-30,-17,-25)
tree.add(trunk,branch1,branch2);
tree2.add(trunk2,branch3,branch4);
tree.position.set(110,60,70)
tree2.position.set(130,65,90)
scene.add(tree);
scene.add(tree2);

// Stand

const stands = new THREE.Group();

geometry = new THREE.CylinderGeometry(0.8, 0.8, 35.5, 64);
material = new THREE.MeshBasicMaterial({ map: texture });
const stand1 = new THREE.Mesh(geometry, material);

stand1.position.set(80, 38, -80.2);

stands.add(stand1);
scene.add(stands);

// Axes Helper

const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,1,10000);
camera.position.set(20, 200, 350);
camera.lookAt(cube.position);
const pointLight = new THREE.PointLight("#fff", 2);


//Pathway

texture = new THREE.TextureLoader().load("../textures/stone-path-texture.webp");
geometry = new THREE.PlaneGeometry( 70, 50 );
material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const path = new THREE.Mesh(geometry, material);
const path2 = new THREE.Mesh(geometry, material);

path.rotation.x = Math.PI * 1.5
path2.rotation.x = Math.PI * 1.5
path2.rotation.z = Math.PI * -1.1

path.position.set(125,16,-1);
path2.position.set(50,16,-13);

scene.add(path);
scene.add(path2);

geometry = new THREE.PlaneGeometry( 90, 50 );
material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const path3 = new THREE.Mesh(geometry, material);

path3.rotation.x = Math.PI * 1.5

path3.position.set(-35,16,-25);

scene.add(path3);

const a = new THREE.Vector2(0,0,0);
const b = new THREE.Vector2();

scene.add(a);
scene.add(b);
//controller

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  canvas: canvas,
  antialias: true,
});

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = true;
  controls.enablePan = true;
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


