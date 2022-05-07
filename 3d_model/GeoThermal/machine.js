
const machine = new THREE.Group()
//steam machine
const SteamMachine = new THREE.Mesh(
    new THREE.BoxGeometry(30,30,30),
    new THREE.MeshStandardMaterial({color:"white"})
)
SteamMachine.position.set(0,13,150)
machine.add(SteamMachine)

const chimney = new THREE.Mesh(
    new THREE.CylinderGeometry(3,3,60,30,30,false),
    new THREE.MeshStandardMaterial({color:"gray"})
)
chimney.position.set(-10,20,160)
machine.add(chimney)
//pipes
const pipes = []
for (let i=0;i<1;i++){
    pipes[i] = new THREE.Mesh(
        new THREE.CylinderGeometry(3,3,30,30,30,false),
        new THREE.MeshStandardMaterial({color:"orange"})
    )
    machine.add(pipes[i])
}
pipes[0].rotation.x = Math.PI * 0.5
pipes[0].position.set(0,0,125)

//spinmachine
const sides = []
const spin = new THREE.Group()
for(let i =0;i<9;i++){

sides[i] = new THREE.Mesh(new THREE.PlaneGeometry(10,10),new THREE.MeshStandardMaterial({color:0xffffff, roughness:0.1,side:THREE.DoubleSide}))
spin.add(sides[i])
}
sides[0].scale.set(3,6)
sides[0].rotation.x = Math.PI * 0.5
sides[0].position.set(0,-2,80)
sides[1].scale.set(3,6)
sides[1].rotation.x = Math.PI * 0.5
sides[1].position.set(0,18,80)
sides[2].scale.set(6,2)
sides[2].rotation.y = Math.PI * 0.5
sides[2].position.set(-15,8,80)
sides[3].scale.set(3,2)
sides[3].position.set(0,8,110)
sides[4].scale.set(3,2)
sides[4].position.set(0,8,50)
sides[4].material.color.setHex(0x808080)
sides[5].scale.set(3,3)
sides[5].position.set(0,-2,35)
sides[5].rotation.x = Math.PI * 0.5
sides[6].scale.set(3,3)
sides[6].position.set(0,18,35)
sides[6].rotation.x = Math.PI * 0.5
sides[7].scale.set(3,2)
sides[7].position.set(-15,8,35)
sides[7].rotation.y = Math.PI * 0.5
sides[8].scale.set(3,2)
sides[8].position.set(0,8,20)


texture = new THREE.TextureLoader().load( '../textures/drill.jpg');
const drill = new THREE.Mesh(
    new THREE.CylinderGeometry(4,7,15,128),
    new THREE.MeshStandardMaterial({map:texture})
)
const drillStand = new THREE.Mesh(
    new THREE.CylinderGeometry(4,4,59,128),
    new THREE.MeshStandardMaterial({map:texture})
)
drill.rotation.x = Math.PI * 1.5
drill.position.set(0,7,95)
const drill2 = drill.clone()
drill2.rotation.x = Math.PI * 0.5
drill2.position.set(0,7,65)
machine.add(drill2)
machine.add(drill)
machine.add(drillStand)
drillStand.rotation.x = Math.PI * 0.5
drillStand.position.set(0,7,80)
const generator = new THREE.Mesh(
 new THREE.BoxGeometry(10,10,20),
 new THREE.MeshStandardMaterial({color:0x808080,roughness:0.1})
)
const generator1 = new THREE.Mesh(
  new THREE.BoxGeometry(10,6,4),
  new THREE.MeshStandardMaterial({color:0x000000,roughness:0.1})
)
const generator2 = new THREE.Mesh(
  new THREE.BoxGeometry(10,1,20),
  new THREE.MeshStandardMaterial({color:0x000000,roughness:0.1})
)
const generator3 = new THREE.Mesh(
  new THREE.BoxGeometry(5,1,3),
  new THREE.MeshStandardMaterial({color:0x000000,roughness:0.1})
)
generator.position.set(0,8,35)
machine.add(generator)
generator1.position.set(0,8,47)
machine.add(generator1)
generator2.position.set(0,2.5,35)
machine.add(generator2)
generator3.position.set(0,13.5,30)
machine.add(generator3)





machine.add(spin)
 