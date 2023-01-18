const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//lights
const light = new THREE.AmbientLight( 0x404040, 0.1 );
scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
const bulbLight = new THREE.PointLight(0x404040, 7, 100);
bulbLight.position.set(5,9.5,-30);
scene.add(bulbLight);

//textures

const brickTexture = new THREE.TextureLoader().load( 'assets/textures/secondbrickwall.jpg');
const wavyTexture = new THREE.TextureLoader().load( 'assets/textures/wavywall.jpg');
const ceilingTexture = new THREE.TextureLoader().load( 'assets/textures/ceiling.jpg');
const woodenTexture = new THREE.TextureLoader().load( 'assets/textures/wooden.jpg');
const railingTexture = new THREE.TextureLoader().load( 'assets/textures/silverrailing.jpg');
const couchTexture  = new THREE.TextureLoader().load( 'assets/textures/couch.jpg');
//Objects

//floor
const floorGeometry = new THREE.BoxGeometry( 30, 1, 10 );
const floorMaterial = new THREE.MeshLambertMaterial( { map: woodenTexture} );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
scene.add( floor );

const floorPartGeometry = new THREE.BoxGeometry(20,1,15);
const floorPartMaterial = new THREE.MeshLambertMaterial( { map: woodenTexture} );
const floorPart = new THREE.Mesh( floorPartGeometry,floorPartMaterial );
scene.add(floorPart);


//walls
//wall left side

const wallLeftGeometry = new THREE.BoxGeometry(1,30,30);
const wallLeftMaterial = new THREE.MeshLambertMaterial({ map: brickTexture});
const wallLeft = new THREE.Mesh(wallLeftGeometry,wallLeftMaterial);
const wallLeftSecond = new THREE.Mesh(wallLeftGeometry,wallLeftMaterial);


scene.add(wallLeft);
scene.add(wallLeftSecond);
//wall front
const wallFrontGeometry = new THREE.BoxGeometry(30,30,1);
const wallFrontMaterial = new THREE.MeshLambertMaterial({ map: brickTexture});
const wallFront = new THREE.Mesh(wallFrontGeometry,wallFrontMaterial);
scene.add(wallFront);

//wall right
const wallRightGeometry = new THREE.BoxGeometry(1,30,30);
const wallRightMaterial = new THREE.MeshLambertMaterial({ map: woodenTexture});
const wallRight = new THREE.Mesh(wallRightGeometry,wallRightMaterial);
scene.add(wallRight);

//ceiling
const ceilingGeometry = new THREE.BoxGeometry(30,1,30);
const ceilingMaterial = new THREE.MeshLambertMaterial({map: ceilingTexture});
const ceiling = new THREE.Mesh(ceilingGeometry,ceilingMaterial);
scene.add(ceiling);

//railing
const railingGeometry = new THREE.CapsuleGeometry(1,4,10,20);
const railingMaterial = new THREE.MeshLambertMaterial({map: railingTexture});
const railing = new THREE.Mesh(railingGeometry,railingMaterial);
const railingSecond = new THREE.Mesh(railingGeometry,railingMaterial);
const railingThird = new THREE.Mesh(railingGeometry,railingMaterial);
const railingFourth = new THREE.Mesh(railingGeometry,railingMaterial);

scene.add(railing);
scene.add(railingSecond);
scene.add(railingThird);
scene.add(railingFourth);

const railingHolderGeometry = new THREE.BoxGeometry(1,1,15);
const railingHolderMaterial = new THREE.MeshLambertMaterial({map: railingTexture});
const railingHolder = new THREE.Mesh(railingHolderGeometry,railingHolderMaterial);
scene.add(railingHolder);

const railingHolderHorizontalGeometry = new THREE.BoxGeometry(12,1,1);
const railingHolderHorizontalMaterial = new THREE.MeshLambertMaterial({map: railingTexture});
const railingHolderHorizontal = new THREE.Mesh(railingHolderHorizontalGeometry,railingHolderHorizontalMaterial);
scene.add(railingHolderHorizontal);

//couch
const couchFlatGeometry = new THREE.BoxGeometry(15,4,2);
const couchFlatMaterial = new THREE.MeshLambertMaterial({map: couchTexture});
const couchFlat = new THREE.Mesh(couchFlatGeometry,couchFlatMaterial);
scene.add(couchFlat);
//couch side
const couchSideGeometry = new THREE.BoxGeometry(1,10,3);
const couchSideMaterial = new THREE.MeshLambertMaterial({map: couchTexture});
const couchSide = new THREE.Mesh(couchSideGeometry,couchSideMaterial);
const couchSideRight = new THREE.Mesh(couchSideGeometry,couchSideMaterial);
scene.add(couchSide);
scene.add(couchSideRight);
//couch back
const couchBackGeometry = new THREE.BoxGeometry(14,5,1);
const couchBackMaterial = new THREE.MeshPhongMaterial({map: couchTexture});
const couchBack = new THREE.Mesh(couchBackGeometry,couchBackMaterial);
scene.add(couchBack);

//light
const lightbulbGeometry = new THREE.CylinderGeometry( 3.45, 3.45, 1, 8 );
const lightbulbMaterial = new THREE.MeshBasicMaterial({color: 'white'});
const lightbulb = new THREE.Mesh(lightbulbGeometry,lightbulbMaterial);
scene.add(lightbulb);
//Camera Adjustment
camera.position.x = 5; // 5
camera.position.y = -2; //0
camera.position.z = -20; //-20


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

    //couch
    couchFlat.position.x = 8;
    couchFlat.position.y = -7;
    couchFlat.position.z = -38;
    
    couchSide.position.x = 1.2;
    couchSide.position.y = -7;
    couchSide.position.z = -38;

    couchSideRight.position.x = 15;
    couchSideRight.position.y = -7;
    couchSideRight.position.z = -38;

    couchBack.position.x = 8;
    couchBack.position.y = -4;
    couchBack.position.z = -38;
    //lightbulb
    lightbulb.position.x = 5;
    lightbulb.position.y = 9.5;
    lightbulb.position.z = -30;
    renderer.render( scene, camera );
}

animate();


