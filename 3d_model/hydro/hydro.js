const scene = new THREE.Scene();

// Panel

const walls = new THREE.Group();
const waals =  new THREE.Group();

// Walls

let texture = new THREE.TextureLoader().load("../textures/stone-texture.webp");
let geometry = new THREE.BoxGeometry(20, 200, 100);
let material = new THREE.MeshBasicMaterial({ map: texture });
const wall = new THREE.Mesh(geometry, material);
const wall2 = new THREE.Mesh(geometry, material);
const wall3 = new THREE.Mesh(geometry, material);
const wall4 = new THREE.Mesh(geometry, material);

// Side Walls
geometry = new THREE.BoxGeometry(20, 600, 300);
material = new THREE.MeshBasicMaterial({ map: texture });

const wall5 = new THREE.Mesh(geometry, material);
const wall6 = new THREE.Mesh(geometry, material);


//Water
// texture = new THREE.TextureLoader().load("../textures/water-texture.webp");
// geometry = new THREE.CylinderGeometry(200, 200, 480, 64);
// material = new THREE.MeshBasicMaterial({ map: texture });
// const wotah = new THREE.Mesh(geometry, material);


const params = {
    color: "#00b4d8",
    scale: 10,
    flowX: -100,
    flowY: 1,
  };
  
  let waterGeometry = new THREE.CylinderGeometry(250, 250, 480,64);

  water = new Water(waterGeometry, {
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024,
  });
  water.rotation.z = Math.PI / 2;
water.position.set(50,-250,60)

waals.add(water);
waterGeometry = new THREE.PlaneGeometry(1000,1000)
water = new Water(waterGeometry, {
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024,
  });
  scene.add(water)

  water.rotation.x = Math.PI * 1.5

  water.position.set(50,-190,0);
  



  

//Cylinder walls

geometry = new THREE.CylinderGeometry(250, 250, 20, 64);
material = new THREE.MeshBasicMaterial({ map: texture });
const waal = new THREE.Mesh(geometry, material);
const waal2 = new THREE.Mesh(geometry, material);
const waal3 = new THREE.Mesh(geometry, material);
const waal4 = new THREE.Mesh(geometry, material);
const waal5 = new THREE.Mesh(geometry, material);
const waal6 = new THREE.Mesh(geometry, material);

waal.rotation.z = Math.PI / 2;
waal2.rotation.z = Math.PI / 2;
waal3.rotation.z = Math.PI / 2;
waal4.rotation.z = Math.PI / 2;
waal5.rotation.z = Math.PI / 2;
waal6.rotation.z = Math.PI / 2;


waals.add(waal);
waals.add(waal2);
waals.add(waal3);
waals.add(waal4);
waals.add(waal5);
waals.add(waal6);
walls.add(wall);
walls.add(wall2);
walls.add(wall3);
walls.add(wall4);
walls.add(wall5);
walls.add(wall6);

wall2.position.set(100,0,0);
wall3.position.set(200,0,0);
wall4.position.set(-100,0,0);
wall5.position.set(-200,-200,-100);
wall6.position.set(300,-200,-100);
waal.position.set(-200,-240,70);
waal2.position.set(300,-240,70)
waal3.position.set(100,-240,70);
waal4.position.set(200,-240,70);
waal5.position.set(-100,-240,70);
waal6.position.set(0,-240,70);



scene.add(walls);
scene.add(waals);
waals.position.y = -10

//Top

geometry = new THREE.BoxGeometry(20, 520, 300);
material = new THREE.MeshBasicMaterial({ map: texture });
const toop = new THREE.Mesh(geometry, material);
const toop2 = new THREE.Mesh(geometry, material);

toop.rotation.z = Math.PI / 2;
toop2.rotation.z = Math.PI / 2;

toop.position.set(50,110,-100);
toop2.position.set(50,-50,-100);

scene.add(toop);
scene.add(toop2);

//Bottom

geometry = new THREE.BoxGeometry(260, 300, 350);
material = new THREE.MeshBasicMaterial({ map: texture });
const Bottam = new THREE.Mesh(geometry, material);
const Bottam2 = new THREE.Mesh(geometry, material);

Bottam.position.set(180,-350,150);
Bottam2.position.set(-80,-350,150);

scene.add(Bottam);
scene.add(Bottam2);

//Between
texture = new THREE.TextureLoader().load("../textures/water-texture.webp");
geometry = new THREE.BoxGeometry(20, 460, 510);
material = new THREE.MeshBasicMaterial({ map: texture });
const Between = new THREE.Mesh(geometry, material);  

Between.rotation.y = Math.PI / 2;

Between.position.set(50,-275,0)

scene.add(Between);

//-------------------

texture = new THREE.TextureLoader().load("../textures/stone-texture.webp");
geometry = new THREE.BoxGeometry(20, 600, 510);
material = new THREE.MeshBasicMaterial({ map: texture });

const Between2 = new THREE.Mesh(geometry, material);

Between2.rotation.y = Math.PI / 2;

Between2.position.set(50,-200,-240)

scene.add(Between2);

//Planes

texture = new THREE.TextureLoader().load("../textures/soil-texture.jpeg");
geometry = new THREE.PlaneGeometry(1000, 1000, 1000);
material = new THREE.MeshBasicMaterial({ map: texture });
const planes = new THREE.Mesh(geometry,material);

planes.rotation.x = Math.PI * 1.5

planes.position.set(50,-200,0);

scene.add(planes);

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
      new THREE.BoxGeometry(2000,1400,40),
      materials
  
  )
  land1.rotation.x = Math.PI * 0.5;

  land1.position.set(0,-250,0);
  scene.add(land1)


//frame size

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};



const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,1,10000);
camera.position.set(200, 200, 200);
camera.lookAt(wall.position);
const pointLight = new THREE.PointLight("#fff", 1.5);
scene.add(pointLight)
pointLight.position.set(0,500,0)


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
  pointLight.position.x = camera.position.x
  pointLight.position.y = camera.position.y
  pointLight.position.z = camera.position.z

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
}

controlAnimation();