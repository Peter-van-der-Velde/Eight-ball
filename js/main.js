import {box} from './box.js';

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
var renderCanv = document.body.appendChild( renderer.domElement );
console.log(renderer);
var clock = new THREE.Clock();
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);

//TextureLoader
var loader = new THREE.TextureLoader();
var floorTexture = loader.load("img/floor.png");
var tableTexture = loader.load("img/green_mat.png");

//Room Textures
roomBuilder(20, 20, floorTexture);
scene.add(roomItems);

//Table
// x, y, z, color, width, height, depth
var green_mat = new textureBox(0, 1, 0, tableTexture,2.8 , 0.1, 1.6);
var wall_1 = new box(1.4, 1, 0, '#835C3B', 0.1, 0.2, 1.7);
var wall_2 = new box(-1.4, 1, 0, '#835C3B', 0.1, 0.2, 1.7);
var wall_3 = new box(0, 1, 0.8, '#835C3B', 2.7, 0.2, 0.1);
var wall_4 = new box(0, 1, -0.8, '#835C3B', 2.7, 0.2, 0.1);
var leg_1 = new box(1.4, 0.5, -0.8, '#835C3B', 0.1, 1, 0.1);
var leg_2 = new box(1.4, 0.5, 0.8, '#835C3B', 0.1, 1, 0.1);
var leg_3 = new box(-1.4, 0.5, 0.8, '#835C3B', 0.1, 1, 0.1);
var leg_4 = new box(-1.4, 0.5, -0.8, '#835C3B', 0.1, 1, 0.1);
var eight_ball_table = new THREE.Group();
var colBounds = new bounds (-1.33, -0.73, 1.33, 0.73); // bounds of table

//eight_ball_table.add(floor);
eight_ball_table.add(green_mat);
eight_ball_table.add(wall_1);
eight_ball_table.add(wall_2);
eight_ball_table.add(wall_3);
eight_ball_table.add(wall_4);
eight_ball_table.add(leg_1);
eight_ball_table.add(leg_2);
eight_ball_table.add(leg_3);
eight_ball_table.add(leg_4);
eight_ball_table.castShadow = true;
scene.add(eight_ball_table);

//Creating the balls (lol)
var white_ball = new ball(-1.0, 1.08, 0, '#FFFFFF');
var ball_1 = new ball(0.5, 1.08, 0, '#00FFFF');
var ball_2 = new ball(0.56, 1.08, 0.03, '#0000FF');
var ball_3 = new ball(0.56, 1.08, -0.03, '#FF00FF');
var ball_4 = new ball(0.62, 1.08, 0, '#000000');
var ball_5 = new ball(0.62, 1.08, 0.06, '#008000');
var ball_6 = new ball(0.62, 1.08, -0.06, '#00FF00');
var ball_7 = new ball(0.68, 1.08, 0.03, '#800000');
var ball_8 = new ball(0.68, 1.08, -0.03, '#000080');
var ball_9 = new ball(0.68, 1.08, 0.09, '#808000');
var ball_10 = new ball(0.68, 1.08, -0.09, '#800080');
var ball_11 = new ball(0.74, 1.08, 0, '#FF0000');
var ball_12 = new ball(0.74, 1.08, 0.06, '#C0C0C0');
var ball_13 = new ball(0.74, 1.08, -0.06, '#008080');
var ball_14 = new ball(0.74, 1.08, 0.12, '#FFFF00');
var ball_15 = new ball(0.74, 1.08, -0.12, '#808000');


balls.push(ball_1);
balls.push(ball_2);
balls.push(ball_3);
balls.push(ball_4);
balls.push(ball_5);
balls.push(ball_6);
balls.push(ball_7);
balls.push(ball_8);
balls.push(ball_9);
balls.push(ball_10);
balls.push(ball_11);
balls.push(ball_12);
balls.push(ball_13);
balls.push(ball_14);
balls.push(ball_15);
balls.push(white_ball);

white_ball.velocity = new THREE.Vector3 (1.6, 0, 0)

balls.forEach(function(ball) {
	scene.add(ball.mesh)
	//ball.velocity = new THREE.Vector3 (0.8, 0, 0.8)
}, this);

// add bounds to the pooltable
//var pooltablebounds = bounds (5,5,5,5);

//Set the camera position
camera.position.set(-2.5, 2.5, 0);
camera.lookAt(green_mat.position);

// add lights to scene
pointLight.lookAt( green_mat );
scene.add(pointLight);
Light.lookAt ( green_mat );
scene.add(Light);
scene.add(LightA);

// add grid and axis
var grid = new THREE.GridHelper(100, 100);
scene.add(grid);
var axisHelper = new THREE.AxisHelper( 20 );
scene.add( axisHelper );

var render = function () {
	var delta = clock.getDelta();
	balls.forEach(function(ball) {
		ball.update(delta, colBounds)
	}, this);
	
	renderer.render( scene, camera );
	requestAnimationFrame( render );
};

render();