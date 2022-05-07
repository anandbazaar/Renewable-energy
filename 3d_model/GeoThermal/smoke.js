//smoke
const smoke = []
for(let i =0;i<1;i++){
 smoke[i]= new THREE.Mesh(
     new THREE.SphereGeometry(100, 100,100),
     new THREE.MeshStandardMaterial({color:0xffffff})
 )   
}
smoke[0].position.set(-10,50,160)
