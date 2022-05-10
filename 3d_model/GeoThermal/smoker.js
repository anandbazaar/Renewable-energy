//smoker
const factory = new THREE.Group();
const FacChimney  = new THREE.Group();

const base = new THREE.Mesh(
    new THREE.CylinderGeometry(
        15,15,45,128
    ),
    new THREE.MeshStandardMaterial({color:0x808080})
)
const base2 = new THREE.Mesh(
    new THREE.CylinderGeometry(
        7,15,10,128
    ),
    new THREE.MeshStandardMaterial({color:0x808080})
)
const base3 = new THREE.Mesh(
    new THREE.CylinderGeometry(
        7,7,60,128
    ),
    new THREE.MeshStandardMaterial({color:0x808080})
)
const base4 = new THREE.Mesh(
    new THREE.CylinderGeometry(
        8,8,10,128
    ),
    new THREE.MeshStandardMaterial({color:0x808080})
)
FacChimney.add(base2)
FacChimney.add(base)
FacChimney.add(base3)
FacChimney.add(base4)
base3.position.set(0,50,0)
base2.position.set(0,27.5,0)
base4.position.set(0,80,0)
FacChimney2 = FacChimney.clone()
factory.add(FacChimney)
FacChimney2.position.set(0,0,-60)
factory.add(FacChimney2)
factory.position.set(0,21,-50)
//main body
material1 = [
    new THREE.MeshStandardMaterial({
        color:0x808080,
        roughness:0.1
    }),
    new THREE.MeshStandardMaterial({
        color:0x808080,
        roughness:0.1
    }),
    new THREE.MeshBasicMaterial({
        color:0x404040,
    }),
    new THREE.MeshStandardMaterial({
        color:0x404040,
        roughness:0.1
    }),
    new THREE.MeshStandardMaterial({
        color:0x404040,
        roughness:0.1
    }),
    new THREE.MeshStandardMaterial({
        color:0x404040,
        roughness:0.1
    }),
]
const MainBody = new THREE.Mesh(
   new THREE.BoxGeometry(50,50,100),
    material1
    )
MainBody.position.set(-20,0,-30)
factory.add(MainBody)
const HoleWay = new THREE.Mesh(
    new THREE.BoxGeometry(20,10,20),
    new THREE.MeshStandardMaterial({color:0x808080})
)
factory.add(HoleWay)
HoleWay.position.set(-20,-25,-100)
const MainTattoo = new THREE.Mesh(
    new THREE.PlaneGeometry(95,40),
    new THREE.MeshBasicMaterial({color:0x808080,side:THREE.DoubleSide})
)
MainTattoo.position.set(6,0,-30)
MainTattoo2 = MainTattoo.clone()
MainTattoo2.position.set(-46,0,-30)
MainTattoo.rotation.y = Math.PI * 0.5
factory.add(MainTattoo2)
MainTattoo2.rotation.y = Math.PI * 1.5
factory.add(MainTattoo)
//pipes
const piipe = new THREE.Mesh(
    new THREE.BoxGeometry(
        20,2,2
    ),
    new THREE.MeshStandardMaterial({
        color:0x808080,
        roughness:0.1
    })
)
piipe.position.set(-15,40,0)
const piipe2 = piipe.clone()
piipe2.rotation.z = Math.PI * 0.5
piipe2.position.set(-24,30,0)
const piipe3 =piipe.clone()
piipe3.position.set(-15,40,-60)
const piipe4 = piipe.clone()
piipe4.rotation.z = Math.PI * 0.5
piipe4.position.set(-24,30,-60)
const piipe5 = piipe.clone()
piipe5.rotation.y = Math.PI * 0.5
piipe5.position.set(-24,-10,-85)
piipe5.material.color.setHex(0x01579b);
const piipe6 = piipe.clone()
piipe6.rotation.z = Math.PI * 0.5
piipe6.position.set(-24,-20,-94)
piipe6.material.color.setHex(0x01579b);
factory.add(piipe)
factory.add(piipe2)
factory.add(piipe3)
factory.add(piipe4)
factory.add(piipe5)
factory.add(piipe6)
factory.position.x = 70
