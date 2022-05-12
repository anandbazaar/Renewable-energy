const scene = new THREE.Scene();
const body = document.querySelector(".body");
scene.background = new THREE.Color(0x2d71b5);
// Panel
const all = new THREE.Group()
const panel = new THREE.Group();
const panel2 = new THREE.Group();
const wires =  new THREE.Group();
const paths =  new THREE.Group();
const flower = new THREE.Group();

// Cube

let texture = new THREE.TextureLoader().load("../textures/solar-texture.jpeg");
let geometry = new THREE.BoxGeometry(20, 1, 40);
let material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material);

panel.add(cube);
panel.add(cube2);


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

// Test



const outline = new THREE.Group();
const outlines = new THREE.Group();

//For the 1st panel
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

//For the 2nd panel

geometry = new THREE.BoxGeometry(20, 1, 0.5);
material = new THREE.MeshBasicMaterial({ color: "white" });

const outline7 = new THREE.Mesh(geometry, material);
const outline8 = new THREE.Mesh(geometry, material);

geometry = new THREE.BoxGeometry(1, 1, 40.9);
material = new THREE.MeshBasicMaterial({ color: "white" });

const outline9 = new THREE.Mesh(geometry, material);
const outline10 = new THREE.Mesh(geometry, material);

geometry = new THREE.BoxGeometry(1, 0.5, 40.9);
material = new THREE.MeshBasicMaterial({ color: "white" });

const outline11 = new THREE.Mesh(geometry, material);

geometry = new THREE.BoxGeometry(19, 2, 0.7);
material = new THREE.MeshBasicMaterial({ color: "white" });

const outline12 = new THREE.Mesh(geometry, material);

outline7.position.set(0, 0, 20.2);
outline8.position.set(0, 0, -20.2);
outline9.position.set(10.5, 0, 0);
outline10.position.set(-10.5, 0, 0);
outline11.position.set(1, 0.5, -0.01);
outline12.position.set(0.3, 0.6, -0.1);
panel2.position.set(-40, 56.4, 70.3);

panel2.rotation.y = Math.PI * 1

outlines.add(outline7);
outlines.add(outline8);
outlines.add(outline9);
outlines.add(outline10);
outlines.add(outline11);
outlines.add(outline12);

panel2.add(outlines,cube2);

scene.add(panel2);
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
const support = new THREE.Mesh(geometry, material); // Panel 1
const support2 = new THREE.Mesh(geometry, material); // Panel 2

support.position.set(80, 20, -80.2);
support2.position.set(-40, 20, 70.3);

scene.add(support);
scene.add(support2);

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
const tree3 = new THREE.Group()
const trunk = new THREE.Mesh(
  new THREE.CylinderGeometry(4, 5, 15, 128),
  new THREE.MeshBasicMaterial({ color: 0xFDC6B4})
);
const trunk2 = new THREE.Mesh(
  new THREE.CylinderGeometry(4, 6, 35, 128),
  new THREE.MeshBasicMaterial({ color: 0xFDC6B4})
);
const trunk3 = new THREE.Mesh(
  new THREE.CylinderGeometry(4, 6, 35, 128),
  new THREE.MeshBasicMaterial({ color: 0xFDC6B4})
);
trunk.position.set(-30,-43,-25)
trunk2.position.set(-30,-33,-25)
trunk3.position.set(-30,-33,-25)
scene.add(trunk)
const branch3 = new THREE.Mesh(
  new THREE.ConeGeometry(16, 23, 128),
  new THREE.MeshBasicMaterial({ color: 0x78C77F})
);
branch3.position.set(-30,-28,-25)
const branch1 = new THREE.Mesh(
  new THREE.ConeGeometry(13, 20, 128),
  new THREE.MeshBasicMaterial({ color: 0x78C77F})
);
branch1.position.set(-30,-28,-25)
scene.add(branch1)
const branch5 = new THREE.Mesh(
  new THREE.ConeGeometry(16, 23, 128),
  new THREE.MeshBasicMaterial({ color: 0x78C77F})
);
branch5.position.set(-30,-28,-25)
const branch6 = new THREE.Mesh(
  new THREE.ConeGeometry(10, 20, 128),
  new THREE.MeshBasicMaterial({ color: 0x78C77F})
);
branch6.position.set(-30,-17,-25)
const branch4 = new THREE.Mesh(
  new THREE.ConeGeometry(13, 23, 128),
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
tree3.add(trunk3,branch5,branch6);
tree.position.set(110,60,70)
tree2.position.set(130,65,90)
tree3.position.set(80,70,-55)
scene.add(tree);
scene.add(tree2);
scene.add(tree3);

// Stand

const stands = new THREE.Group();

geometry = new THREE.CylinderGeometry(0.8, 0.8, 35.5, 64);
material = new THREE.MeshBasicMaterial({ map: texture });
const stand1 = new THREE.Mesh(geometry, material);
const stand2 = new THREE.Mesh(geometry, material);

stand1.position.set(80, 38, -80.2);
stand2.position.set(-40, 38, 70.3);

stands.add(stand1);
stands.add(stand2);
scene.add(stands);

//Flower

texture = new THREE.TextureLoader().load("../textures/Flower-Petal-Texture.jpeg");
geometry = new THREE.PlaneGeometry(8, 5);
material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const petal = new THREE.Mesh(geometry, material);
const petal2 = new THREE.Mesh(geometry, material);
const petal3 = new THREE.Mesh(geometry, material);
const petal4 = new THREE.Mesh(geometry, material);

flower.add(petal);
flower.add(petal2);
flower.add(petal3);
flower.add(petal4);

petal2.rotation.y = Math.PI / 2
petal4.rotation.y = Math.PI / 2

petal.position.set(0,27,50);
petal2.position.set(0,27,50);
petal3.position.set(30,27,-70);
petal4.position.set(30,27,-70);

texture = new THREE.TextureLoader().load("../textures/Stem-Texture.jpeg");
geometry = new THREE.CylinderGeometry(0.8, 0.8, 10.5, 64);
material = new THREE.MeshBasicMaterial({ map: texture });
const stem = new THREE.Mesh(geometry, material);
const stem2 = new THREE.Mesh(geometry, material);

flower.add(stem);
flower.add(stem2);

stem.position.set(0,20,50);
stem2.position.set(30,20,-70);


// Axes Helper

const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, (window.innerWidth-500) / window.innerHeight,1,10000);
camera.position.set(20, 200, 350);
camera.lookAt(cube.position);
const pointLight = new THREE.PointLight("#fff", 2);


//Pathway

texture = new THREE.TextureLoader().load("../textures/stone-path-texture.webp");
geometry = new THREE.PlaneGeometry( 85, 50 );
material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const path = new THREE.Mesh(geometry, material);
const path2 = new THREE.Mesh(geometry, material);

path.rotation.x = Math.PI * 1.5
path2.rotation.x = Math.PI * 1.5
path2.rotation.z = Math.PI * -1.1

path.position.set(128,16.5,-1);
path2.position.set(54,16,-13);


geometry = new THREE.PlaneGeometry( 100, 50 );
material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const path3 = new THREE.Mesh(geometry, material);

path3.rotation.x = Math.PI * 1.5

path3.position.set(-30,16.5,-25);

paths.add(path);
paths.add(path2);
paths.add(path3);

scene.add(paths);


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
renderer.setSize(window.innerWidth-500, window.innerHeight);
renderer.render(scene, camera);
// animate();
let rotationIndex = 1100;
let rotationDirection = true;
const panelRotation = () => {
  all.rotation.y += 0.005
  requestAnimationFrame(panelRotation);
  panel2.rotation.z = Math.PI / (rotationIndex2 / 1000);
  if (rotationIndex2 === 1400) {
    rotationDirection2 = false;
  }
  if (rotationIndex2 === 1100) {
    rotationDirection2 = true;
  }
  if (rotationDirection2) {
    rotationIndex2 += 2.5;
  } else {
    rotationIndex2 -= 2.5;
  } 
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
  // if (
  //   (camera.position.x < 0 && camera.position.z < 0) ||
  //   (camera.position.x > 0 && camera.position.z < 0)
  // ) {
  //   if (direction === "left") {
  //     direction = "right";
  //     move();
  //   }
  // } else {
  //   if (direction === "right") {
  //     direction = "left";
  //     move();
  //   }
  // }
};

let rotationIndex2 = 1100;
let rotationDirection2 = true;

// Test

function main() {
  canvas = document.querySelector('#c');
  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });
}

panelRotation();

function controlAnimation() {
  if (sessionStorage.getItem("dark") == "true") {
    scene.background = new THREE.Color(0x152744);
    body.style.backgroundColor = "rgb(21,39,68)";
    infoCont.style.backgroundColor = "rgb(21,39,68)";
    infoBox.style.backgroundColor = "rgb(21,39,68)";
  }
  if (sessionStorage.getItem("dark") == "false") {
    scene.background = new THREE.Color(0x2d71b5);
    body.style.backgroundColor = "rgb(45,113,181)";
    infoCont.style.backgroundColor = "rgb(45,113,181)";
    infoBox.style.backgroundColor = "rgb(45,113,181)";
  }

  requestAnimationFrame(controlAnimation);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();
  

  renderer.render(scene, camera);
}

controlAnimation();


all.add(panel,panel2)
all.add(paths)
all.add(pointLight);
all.add(tree,tree2,tree3);
all.add(land1,land2);
all.add(stands,support,support2);
all.add(flower);

scene.add(all);


all.position.set(0,0,0)
// const updateWindow = () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.render(scene, camera);
// }
// window.onresize = updateWindow



