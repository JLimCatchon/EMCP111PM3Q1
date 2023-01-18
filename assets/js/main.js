const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//lights
const light = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
scene.add( light );



//Objects

//floor
const floorGeometry = new THREE.BoxGeometry( 30, 1, 10 );
const floorMaterial = new THREE.MeshLambertMaterial( { color: 'pink'} );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
scene.add( floor );

const floorPartGeometry = new THREE.BoxGeometry(20,1,15);
const floorPartMaterial = new THREE.MeshLambertMaterial( { color: 'pink'} );
const floorPart = new THREE.Mesh( floorPartGeometry,floorPartMaterial );
scene.add(floorPart);


//walls
//wall left side

const wallLeftGeometry = new THREE.BoxGeometry(1,30,30);
const wallLeftMaterial = new THREE.MeshLambertMaterial({color: 'green'});
const wallLeft = new THREE.Mesh(wallLeftGeometry,wallLeftMaterial);
const wallLeftSecond = new THREE.Mesh(wallLeftGeometry,wallLeftMaterial);

scene.add(wallLeftSecond);
scene.add(wallLeft);

//wall front
const wallFrontGeometry = new THREE.BoxGeometry(30,30,1);
const wallFrontMaterial = new THREE.MeshLambertMaterial({color: 'white'});
const wallFront = new THREE.Mesh(wallFrontGeometry,wallFrontMaterial);
scene.add(wallFront);

//wall right
const wallRightGeometry = new THREE.BoxGeometry(1,30,30);
const wallRightMaterial = new THREE.MeshLambertMaterial({color: 'green'});
const wallRight = new THREE.Mesh(wallRightGeometry,wallRightMaterial);
scene.add(wallRight);

//ceiling
const ceilingGeometry = new THREE.BoxGeometry(30,1,30);
const ceilingMaterial = new THREE.MeshLambertMaterial({color: 'pink'});
const ceiling = new THREE.Mesh(ceilingGeometry,ceilingMaterial);
scene.add(ceiling);

//railing
const railingGeometry = new THREE.CapsuleGeometry(1,4,10,20);
const railingMaterial = new THREE.MeshLambertMaterial({color: 'green'});
const railing = new THREE.Mesh(railingGeometry,railingMaterial);
const railingSecond = new THREE.Mesh(railingGeometry,railingMaterial);
const railingThird = new THREE.Mesh(railingGeometry,railingMaterial);
const railingFourth = new THREE.Mesh(railingGeometry,railingMaterial);

scene.add(railingFourth);
scene.add(railingThird);
scene.add(railingSecond);
scene.add(railing);

const railingHolderGeometry = new THREE.BoxGeometry(1,1,15);
const railingHolderMaterial = new THREE.MeshLambertMaterial({color: 'white'});
const railingHolder = new THREE.Mesh(railingHolderGeometry,railingHolderMaterial);
scene.add(railingHolder);

const railingHolderHorizontalGeometry = new THREE.BoxGeometry(12,1,1);
const railingHolderHorizontalMaterial = new THREE.MeshLambertMaterial({color: 'white'});
const railingHolderHorizontal = new THREE.Mesh(railingHolderHorizontalGeometry,railingHolderHorizontalMaterial);
scene.add(railingHolderHorizontal);

//Camera Adjustment
camera.position.x = 5; // 5
camera.position.y = -2; //0
camera.position.z = -20; //-30


///Insert Code here

function animate() {
	requestAnimationFrame( animate );

    //floor
    floor.position.x = 5;
    floor.position.y = -10;
    floor.position.z = -38;

    floorPart.position.x = 10;
    floorPart.position.y = -10;
    floorPart.position.z = -30;

    //walls
    //wall Left
    wallLeft.position.x = -10;
    wallLeft.position.y = -10;
    wallLeft.position.z = -38;

    wallLeftSecond.position.x = -10;
    wallLeftSecond.position.y = -5;
    wallLeftSecond.position.z = -38;

    //wall front
    wallFront.position.x = 5;
    wallFront.position.y = -5;
    wallFront.position.z = -43;

    //wall Right
    wallRight.position.x =  20;
    wallRight.position.y = -5;
    wallRight.position.z = -39;

    //ceiling
    ceiling.position.x = 5;
    ceiling.position.y = 10;
    ceiling.position.z = -40;

    //railing
    railing.position.x = -6;
    railing.position.y = -8;
    railing.position.z = -34;

    railingSecond.position.x =  1;
    railingSecond.position.y = -8;
    railingSecond.position.z = -34;
    
    railingThird.position.x = 1;
    railingThird.position.y = -8;
    railingThird.position.z = -29;

    railingFourth.position.x = 1;
    railingFourth.position.y = -8;
    railingFourth.position.z = -24;

    railingHolder.position.x = 1.2;
    railingHolder.position.y = -5.9;
    railingHolder.position.z = -27;
    
    railingHolderHorizontal.position.x = -5;
    railingHolderHorizontal.position.y = -6;
    railingHolderHorizontal.position.z = -34;
    renderer.render( scene, camera );
}

animate();


