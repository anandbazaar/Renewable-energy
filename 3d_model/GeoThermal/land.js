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

  let geometry = new THREE.BoxGeometry(400,10,400)
  let grass = new THREE.Mesh(geometry, materials)

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

  geometry = new THREE.BoxGeometry(400,10,400)
  let dirt = new THREE.Mesh(geometry, materials)

  dirt.position.set(0,-10,0);

  land.add(dirt);
// water

  const params = {
    color: "#00b4d8",
    scale: 10,
    flowX: 10,
    flowY: 10,
  };
  const waterGeometry = new THREE.BoxGeometry(400,10,400);
  
  water = new Water(waterGeometry, {
  
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024,
  });

  land.add(water);

  water.position.set(0,-20,0)
// red thing
material = new THREE.MeshStandardMaterial({color: "brown" } ) ;
geometry = new THREE.BoxGeometry(400,10,400)
let crust = new THREE.Mesh(geometry, material)

land.add(crust)

crust.position.set(0,-30,0);




