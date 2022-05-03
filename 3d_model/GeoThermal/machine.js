const machine = new THREE.Group()
//steam machine
const SteamMachine = new THREE.Mesh(
    new THREE.BoxGeometry(50,50,50),
    new THREE.MeshStandardMaterial({color:"white"})
)
SteamMachine.position.set(0,25,150)
machine.add(SteamMachine)