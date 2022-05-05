
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
        new THREE.CylinderGeometry(3,3,60,30,30,false),
        new THREE.MeshStandardMaterial({color:"orange"})
    )
    machine.add(pipes[i])
}
pipes[0].rotation.x = Math.PI * 0.5
pipes[0].position.set(0,0,110)

//spinmachine
const spin = new THREE.Mesh(
    
)
 