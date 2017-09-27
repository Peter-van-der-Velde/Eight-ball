var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

console.log(renderer);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0,0,0)


//Set the camera position
camera.position.x = -2;
camera.position.y = 1.5;
camera.position.z = 1.5;

// // create a point light
const pointLight = new THREE.PointLight(0xFFFFFF);
// set the position of the light
pointLight.position.x = 0;
pointLight.position.y = 20;
pointLight.position.z = 0;

scene.add(pointLight);
var Light = new THREE.DirectionalLight( 0xdddddd, 0.8 );
Light.position.set( -8, 8, 8 );

scene.add(Light);

var LightA = new THREE.AmbientLight( 0x000 );
scene.add(LightA);
var grid = new THREE.GridHelper(100, 100);
scene.add(grid);
var axisHelper = new THREE.AxisHelper( 20 );
scene.add( axisHelper );

  // add to the scene
var render = function () {
	renderer.render( scene, camera );
	requestAnimationFrame( render );
	controls.update();
};

function animate() {
   requestAnimationFrame( animate );
}

animate();
render();
