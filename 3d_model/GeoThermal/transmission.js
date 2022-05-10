let tower = new THREE.Group();
let stand = new THREE.Group();
// let holders = new THREE.Group();
let standdecor = new THREE.Group();
let crisses = new THREE.Group();

var material = new THREE.MeshStandardMaterial({ color: "grey" });
var geometry = new THREE.BoxGeometry(10, 1, 10);
const head = new THREE.Mesh(geometry, material);
tower.add(head);
head.position.set(0, 92, 0);

head.rotation.y = Math.PI / 4;
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

tower.rotation.y = Math.PI / 4;
//////////////

// geometry = new THREE.BoxGeometry(1.5, 20, 1.5);
// let holder = new THREE.Mesh(geometry, material);

// holder.rotation.x = Math.PI / 2;
// holder.rotation.z = Math.PI / 2;

// holder.position.set(0, 35, 10.5);

// const holder2 = holder.clone();
// holder2.position.set(0, 35, -10.5);

// const holder3 = holder.clone();

// holder3.rotation.z = Math.PI * 2;
// holder3.position.set(10.5, 35, 0);

// const holder4 = holder.clone();

// holder4.rotation.z = Math.PI * 2;
// holder4.position.set(-10.5, 35, 0);

// const holder5 = holder.clone();
// holder5.position.set(0, 75, 10.5);

// const holder6 = holder.clone();
// holder6.position.set(0, 75, -10.5);

// const holder7 = holder.clone();

// holder7.rotation.z = Math.PI * 2;
// holder7.position.set(10.5, 75, 0);

// const holder8 = holder.clone();

// holder8.rotation.z = Math.PI * 2;
// holder8.position.set(-10.5, 75, 0);

//////////////

geometry = new THREE.BoxGeometry(1.5, 22, 1.5);

// cross.position.set(0,40,10.5)
let crosses = [];
let height = 40;
for (let i = 0; i < 12; i++) {
  crosses[i] = new THREE.Mesh(geometry, material);
  crosses[i].position.set(0, height, 10.5);
  if (i == 0 || i % 2 == 0) crosses[i].rotation.z = Math.PI / 1.7;
  else {
    crosses[i].rotation.z = Math.PI / -1.7;
    height += 6;
  }
  standdecor.add(crosses[i]);
}

const crosses2 = standdecor.clone();
crosses2.rotation.y = Math.PI / 2;

const crosses3 = standdecor.clone();
crosses3.rotation.y = Math.PI;

const crosses4 = standdecor.clone();
crosses4.rotation.y = (3 * Math.PI) / 2;

standdecor.add(crosses2, crosses3, crosses4);

geometry = new THREE.BoxGeometry(45, 1, 1);
const criss = new THREE.Mesh(geometry, material);
criss.position.set(-1, -3, 23);
criss.rotation.z =  Math.PI / 10

geometry = new THREE.BoxGeometry(45, 1, 1);
const criss2 = new THREE.Mesh(geometry, material);
criss2.position.set(23, -3, 1);
criss2.rotation.y = Math.PI / 2
criss2.rotation.x =  Math.PI / 10

geometry = new THREE.BoxGeometry(45, 1, 1);
const criss3 = new THREE.Mesh(geometry, material);
criss3.position.set(-1, -3, -23);
criss3.rotation.z =  Math.PI / 10


geometry = new THREE.BoxGeometry(45, 1, 1);
const criss4 = new THREE.Mesh(geometry, material);
criss4.position.set(-23, -3, 1);
criss4.rotation.y = Math.PI / 2
criss4.rotation.x =  Math.PI / 10

const criss5 = criss.clone();
criss5.scale.set(0.7,1,1)
criss5.position.set(0,13,25)

const criss6 = criss2.clone();
criss6.scale.set(0.7,1,1)
criss6.position.set(26,13,0);

const criss7 = criss3.clone();
criss7.scale.set(0.7,1,1)
criss7.position.set(0,13,-25)

const criss8 = criss4.clone();
criss8.scale.set(0.7,1,1)
criss8.position.set(-26,13,0)


crisses.add(
  criss,
  criss5,
);
  let crisses2 = new THREE.Group();
  crisses2.add(
    criss2,
    criss6,
  )
  let crisses3 = new THREE.Group();
  crisses3.add(
    criss3,
    criss7,
  )
  let crisses4 = new THREE.Group();
  crisses4.add(
    criss4,
    criss8
  )
  crisses2.rotation.z = Math.PI / 6
  crisses.rotation.x = -Math.PI / 6
  crisses4.rotation.z = Math.PI / -6
  crisses3.rotation.x = Math.PI / 6
  let crisseses = new THREE.Group();
  crisseses.add(crisses,crisses2,crisses3,crisses4)
  const crisseses2 = crisseses.clone();
  const crisseses3 = crisseses.clone();
  crisseses2.rotation.y = Math.PI / -2
  crisseses3.rotation.y = Math.PI / 2

// let crosses = []
//     height = 40 
// for(let i =0;i<7;i++){
//     crosses[i]= new THREE.Mesh(geometry,material);
//     if(i==0 || i%2==0) crosses[i].rotation.z = Math.PI / 1.7
//     else crosses[i].rotation.z = Math.PI / -1.7
//     crosses[i].position.set(0,height,10.5)
//     height+=5
//     standdecor.add(crosses[i])
// }

// const criss = cross.clone();
// criss.rotation.z = Math.PI / -1.7
// criss.position.set(0,40,10.5)

// const cross2 = cross.clone();
// cross2.position.set(0,45,10.5)

// const criss2 = cross.clone();
// criss2.rotation.z = Math.PI / -1.7
// criss2.position.set(0,45,10.5)

// const cross3 = cross.clone();
// cross3.position.set(0,50,10.5)

// const criss3 = cross.clone();
// criss3.rotation.z = Math.PI / -1.7
// criss3.position.set(0,50,10.5)

// const cross4 = cross.clone();
// cross4.position.set(0,55,10.5)

// const criss4 = cross.clone();
// criss4.rotation.z = Math.PI / -1.7
// criss4.position.set(0,55,10.5)

// const cross5 = cross.clone();
// cross5.position.set(0,60,10.5)

// const criss5 = cross.clone();
// criss5.rotation.z = Math.PI / -1.7
// criss5.position.set(0,60,10.5)

// holders.add(
//   holder,
//   holder2,
//   holder3,
//   holder4,
//   holder5,
//   holder6,
//   holder7,
//   holder8
// );
// standdecor.add(cross,criss,cross2,criss2,cross3,criss3,cross4,criss4,cross5,criss5)
