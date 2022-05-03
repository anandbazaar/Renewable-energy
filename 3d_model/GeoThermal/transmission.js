let tower = new THREE.Group();
let stand = new THREE.Group();

var material = new THREE.MeshBasicMaterial({ color: "grey" });
var geometry = new THREE.BoxGeometry(10, 1, 10);
const head = new THREE.Mesh(geometry, material);
tower.add(head);
head.position.set(0,92,0); 

head.rotation.y = Math.PI / 4
/////////////
geometry = new THREE.BoxGeometry(2, 20, 2);
const leg1 = new THREE.Mesh(geometry, material);
leg1.position.set(0, 40 + 25 * Math.sqrt(3), 10);
leg1.rotation.x = -Math.PI / 6;
stand.add(leg1);

geometry = new THREE.BoxGeometry(2, 40, 2);
const leg2 = new THREE.Mesh(geometry, material);
leg2.position.set(0, 20.5 + 20 * Math.sqrt(3), 15);

stand.add(leg2);

geometry = new THREE.BoxGeometry(2, 40, 2);
const leg3 = new THREE.Mesh(geometry, material);
leg3.position.set(0, 1 + 10 * Math.sqrt(3), 25);
leg3.rotation.x = -Math.PI / 6;

stand.add(leg3);

tower.add(stand);
//////////////
const stand2 = stand.clone();
const stand3 = stand.clone();
const stand4 = stand.clone();

stand2.rotation.y = Math.PI / 2;
stand3.rotation.y = Math.PI;
stand4.rotation.y = (3 * Math.PI) / 2;

tower.add(stand2);
tower.add(stand3);
tower.add(stand4);
// const legs = [];

//Base
// for (let i = 0; i < 4; i++) {
//   const material = new THREE.MeshBasicMaterial({ color: "grey" });
//   const geometry = new THREE.BoxGeometry(7, 80, 7);
//   legs.push(new THREE.Mesh(geometry, material));
//   tower.add(legs[i]);
// }

// legs.forEach((leg, index) => {
//   leg.position.set(index * 20, 40, 0);
//   tower.add(leg);
// });

//Middle
// const holders = [];

// for (let i = 0; i < 4; i++) {
//     const material = new THREE.MeshBasicMaterial({ color: "grey" });
//     const geometry = new THREE.BoxGeometry(6, 50, 6);
//     holders.push(new THREE.Mesh(geometry, material));
//   }

//   holders.forEach((holder, index) => {
//     holder.position.set(index * 20, 40, 0);
//     tower.add(holder);
//   });

//Top
// const Roofs = [];
// const Connectors = [];

// for (let i = 0; i < 4; i++) {
//     const material = new THREE.MeshBasicMaterial({ color: "grey" });
//     const geometry = new THREE.BoxGeometry(5.5, 30, 5.5);
//     Roofs.push(new THREE.Mesh(geometry, material));
//   }

//   for (let i = 0; i < 1; i++) {
//     const material = new THREE.MeshBasicMaterial({ color: "grey" });
//     const geometry = new THREE.BoxGeometry(10, 25, 25);
//     Connectors.push(new THREE.Mesh(geometry, material));
//   }

//   Roofs.forEach((Roof, index) => {
//     Roof.position.set(index * 20, 40, 0);
//     tower.add(Roof);
//   });

//   Connectors.forEach((Con, index) => {
//     Con.position.set(index * 20, 40, 0);
//     tower.add(Con);
//   });

// Base

// legs[0].position.set(40, 40, 0);
// legs[0].rotation.x = Math.PI / 1.2
// legs[0].rotation.z = Math.PI / 1.2
// legs[1].position.set(40,40,-80);
// legs[1].rotation.x = Math.PI / -1.2
// legs[1].rotation.z = Math.PI / 1.2
// legs[2].position.set(-40, 40, 0);
// legs[2].rotation.x = Math.PI / 1.2
// legs[2].rotation.z = Math.PI / -1.2
// legs[3].position.set(-40, 40, -80);
// legs[3].rotation.x = Math.PI / -1.2
// legs[3].rotation.z = Math.PI / -1.2

//Middle

// holders[0].position.set(22,91,-16)
// holders[1].position.set(-22,91,-16)
// holders[2].position.set(22,91,-64)
// holders[3].position.set(-22,91,-64)

// Top

// Roofs[0].position.set(15.5,125,-22)
// Roofs[0].rotation.x = Math.PI / 1.2
// Roofs[0].rotation.z = Math.PI / 1.2
// Roofs[1].position.set(-15.5,125,-22)
// Roofs[1].rotation.x = Math.PI / 1.2
// Roofs[1].rotation.z = Math.PI / -1.2
// Roofs[2].position.set(15.5,125,-58)
// Roofs[2].rotation.x = Math.PI / -1.2
// Roofs[2].rotation.z = Math.PI / 1.2
// Roofs[3].position.set(-15.5,125,-58)
// Roofs[3].rotation.x = Math.PI / -1.2
// Roofs[3].rotation.z = Math.PI / -1.2

// Connectors[0].position.set(0,0,0)
// Connectors[0].rotation.z = Math.PI / 2
// Connectors[1].rotation.z = Math.PI / 2
// Connectors[1].position.set(0,0,0)
// Connectors[2].rotation.z = Math.PI / 2
// Connectors[2].rotation.y = Math.PI / 2
// Connectors[2].position.set(0,0,0)
// Connectors[3].rotation.z = Math.PI / 2
// Connectors[3].rotation.y = Math.PI / 2
// Connectors[3].position.set(0,0,0)
