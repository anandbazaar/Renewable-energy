let land = new THREE.Group();
//grass

let texture = new THREE.TextureLoader().load("../textures/grass-texture.jpeg");

var materials = [
  new THREE.MeshBasicMaterial({
    color: "green",
  }),
  new THREE.MeshLambertMaterial({
    color: "green",
  }),
  new THREE.MeshLambertMaterial({
    map: texture
  }),
  new THREE.MeshLambertMaterial({
    color: "green",
  }),
  new THREE.MeshStandardMaterial({
    color: "green",
    roughness: 0.1,
  }),
  new THREE.MeshLambertMaterial({
    color: "green",
  }),
];

  let geometry1 = new THREE.BoxBufferGeometry(200,10,350,20,20)
  const count = geometry1.attributes.position.count
  let grass = new THREE.Mesh(geometry1, materials)

  land.add(grass);

//dirt

texture = new THREE.TextureLoader().load("../textures/soil-texture.jpeg");

var materials = [
  new THREE.MeshBasicMaterial({
    color: 0x734217,
  }),
  new THREE.MeshLambertMaterial({
    color: 0x734217,
  }),
  new THREE.MeshLambertMaterial({
    map: texture
  }),
  new THREE.MeshLambertMaterial({
    color: 0x734217,
  }),
  new THREE.MeshStandardMaterial({
    color: 0x734217,
    roughness: 0.1,
  }),
  new THREE.MeshLambertMaterial({
    color: 0x734217,
  }),
];
   geometry = new THREE.BoxGeometry(200,10,350)
  let dirt = new THREE.Mesh(geometry, materials)

  dirt.position.set(0,-10,0);

  land.add(dirt);
// water
  const water = [] 

  const params = {
    color: "#00b4d8",
    scale: 1,
    flowX: 1,
    flowY: 1,
  };
  const waterGeometry = new THREE.PlaneGeometry(350,40);
  for(let i=0;i<4;i++){
  water[i] = new Water(waterGeometry, {
  
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024,
  });

  land.add(water[i]);
  }
  water[0].position.set(-100,-35,0)
  water[0].rotation.y = Math.PI * 1.5
  water[1].position.set(100,-35,0)
  water[1].rotation.y = Math.PI * 0.5
  water[2].position.set(0,-35,175)
  water[2].scale.x = 0.572
  water[3].position.set(0,-35,-175)
  water[3].rotation.y = Math.PI
  water[3].scale.x = 0.572
  //water insides
  // const waterInsides = new THREE.Mesh(
  //   new THREE.BoxGeometry(390,40,390),
  //   new THREE.MeshBasicMaterial({color:"blue"})
  // )
  // land.add(waterInsides)
  // waterInsides.position.set(0,-35,0)
// red thing
material = new THREE.MeshStandardMaterial({color: "brown" } ) ;
geometry = new THREE.BoxGeometry(200,10,350)
let crust = new THREE.Mesh(geometry, material)

land.add(crust)

crust.position.set(0,-60,0);

