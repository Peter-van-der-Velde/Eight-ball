import {box} from './box.js';
import {cylinder} from './cylinder.js';


var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // to antialias the shadow
var renderCanv = document.getElementById("renderCanvasDiv").appendChild( renderer.domElement );
renderCanv.id = "renderCanvas";
console.log(renderer);
var clock = new THREE.Clock();
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);

//TextureLoader
var loader = new THREE.TextureLoader();
var floorTexture = loader.load("img/floor.png");
var tableTexture = loader.load("img/green_mat.png");
var wallTexture = loader.load("img/wallBackground.png");
var tableEdgeTexture = loader.load("img/edge.png");

//Room Textures
roomBuilder(10, 10, 10, floorTexture, wallTexture);
scene.add(roomItems);

//Table
// x, y, z, color, width, height, depth
var green_mat = new textureBox(0, 1, 0, tableTexture,2.8 , 0.1, 1.6);
var wall_1 = new textureBox(1.4, 1, 0, tableEdgeTexture, 0.1, 0.2, 1.3); //1.7
var wall_2 = new textureBox(-1.4, 1, 0, tableEdgeTexture, 0.1, 0.2, 1.3); //1.7
var wall_3 = new textureBox(0.67, 1, 0.8, tableEdgeTexture, 1.1, 0.2, 0.1); //2.7
var wall_4 = new textureBox(-0.67, 1, 0.8, tableEdgeTexture, 1.1, 0.2, 0.1); //2.7
var wall_5 = new textureBox(0.67, 1, -0.8, tableEdgeTexture, 1.1, 0.2, 0.1); //2.7
var wall_6 = new textureBox(-0.67, 1, -0.8, tableEdgeTexture, 1.1, 0.2, 0.1); //2.7
var cylinder_1 = new cylinder(0, 1, 0.85, '#000000', 0.2, 0.12, 0.12);
var cylinder_2 = new cylinder(0, 1, -0.85, '#000000', 0.2, 0.12, 0.12);
var cylinder_3 = new cylinder(1.35, 1, 0.8, '#000000', 0.2, 0.12, 0.12);
var cylinder_4 = new cylinder(1.35, 1, -0.8, '#000000', 0.2, 0.12, 0.12);
var cylinder_5 = new cylinder(-1.35, 1, 0.8, '#000000', 0.2, 0.12, 0.12);
var cylinder_6 = new cylinder(-1.35, 1, -0.8, '#000000', 0.2, 0.12, 0.12);
var poolCue = new cylinder(0, 1, 0, '#FFF', 1.8, 0.010, 0.020);
var leg_1 = new box(1.4, 0.5, -0.8, '#835C3B', 0.1, 1, 0.1);
var leg_2 = new box(1.4, 0.5, 0.8, '#835C3B', 0.1, 1, 0.1);
var leg_3 = new box(-1.4, 0.5, 0.8, '#835C3B', 0.1, 1, 0.1);
var leg_4 = new box(-1.4, 0.5, -0.8, '#835C3B', 0.1, 1, 0.1);
var eight_ball_table = new THREE.Group();
var colBounds = new bounds (-1.33, -0.73, 1.33, 0.73); // bounds of table
eight_ball_table.add(green_mat);
eight_ball_table.add(wall_1);
eight_ball_table.add(wall_2);
eight_ball_table.add(wall_3);
eight_ball_table.add(wall_4);
eight_ball_table.add(cylinder_1.mesh);
eight_ball_table.add(cylinder_2.mesh);
eight_ball_table.add(cylinder_3.mesh);
eight_ball_table.add(cylinder_4.mesh);
eight_ball_table.add(cylinder_5.mesh);
eight_ball_table.add(cylinder_6.mesh);
eight_ball_table.add(poolCue.mesh);
eight_ball_table.add(wall_5);
eight_ball_table.add(wall_6);
eight_ball_table.add(leg_1);
eight_ball_table.add(leg_2);
eight_ball_table.add(leg_3);
eight_ball_table.add(leg_4);
eight_ball_table.castShadow = true;
scene.add(eight_ball_table);

// array of cylinders
var poolHoles = [cylinder_1, cylinder_2, cylinder_3, cylinder_4, cylinder_5, cylinder_6] 

//Creating the balls (lol)
var white_ball = new WhiteBall(-1.0, 1.08, 0, '#FFFFFF');
var ball_1 = new Ball(0.5, 1.08, 0, '#00FFFF');
var ball_2 = new Ball(0.56, 1.08, 0.03, '#0000FF');
var ball_3 = new Ball(0.56, 1.08, -0.03, '#FF00FF');
var ball_4 = new Ball(0.62, 1.08, 0, '#000000');
var ball_5 = new Ball(0.62, 1.08, 0.06, '#008000');
var ball_6 = new Ball(0.62, 1.08, -0.06, '#00FF00');
var ball_7 = new Ball(0.68, 1.08, 0.03, '#800000');
var ball_8 = new Ball(0.68, 1.08, -0.03, '#000080');
var ball_9 = new Ball(0.68, 1.08, 0.09, '#808000');
var ball_10 = new Ball(0.68, 1.08, -0.09, '#800080');
var ball_11 = new Ball(0.74, 1.08, 0, '#FF0000');
var ball_12 = new Ball(0.74, 1.08, 0.06, '#C0C0C0');
var ball_13 = new Ball(0.74, 1.08, -0.06, '#008080');
var ball_14 = new Ball(0.74, 1.08, 0.12, '#FFFF00');
var ball_15 = new Ball(0.74, 1.08, -0.12, '#808000');

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

balls.forEach(function(ball) {
	scene.add(ball.mesh)
}, this);

//Set the camera position
camera.position.set(-2.5, 2.5, 0);
camera.lookAt(green_mat.position);

// add lights to scene
pointLight.lookAt( green_mat );
scene.add(pointLight);
scene.add(LightA);

// add grid and axis
var grid = new THREE.GridHelper(100, 100);
scene.add(grid);
var axisHelper = new THREE.AxisHelper( 20 );
scene.add( axisHelper );

// add players to game
var player1 = new Player("George"); 
var player2 = new Player("George2");
var players = [];
players.push(player1);
players.push(player2);

var turn = 0;
var playerTurn = 0;
var x;
var z;
var amountOfBalls;
var amountOfBallsThisRound = balls.length;


function nextTurn() {
	amountOfBallsThisRound = balls.length;
	turn++;
	playerTurn = turn % players.length;
}

function ballsHaveStopped() {
	for (let i = 0; i < balls.length; i++) {
		if (balls[i].getTotalVelocity() >= 0.02)
			return false;
	}
	return true;
}
	
function calcScore() {
	if (amountOfBalls != balls.length) {
		let score = (amountOfBallsThisRound - balls.length) * 100;
		players[playerTurn].addPoints(score);
		amountOfBalls = balls.length;
	}
}


//Auto resizer when window size changes
window.addEventListener( 'resize', onWindowResize, false );

/**
 * Auto resizer when window size changes
 */
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}


/**
 * update the GUI elements
 */
function updateUI() {
	var turnH = document.getElementById("turn");
	turnH.innerHTML = "Whose turn is it? it is:" + players[playerTurn].name

	var player1Score = document.getElementById("p1Score");
	var player2Score = document.getElementById("p2Score");
	player1Score.innerHTML = player1.totalPoints;
	player2Score.innerHTML = player2.totalPoints;
}

/** 
 * update all the values it can get from the html DOM 
 */
function updateValues() {
	x = document.getElementById("x").value;
	z = document.getElementById("z").value;
}

function aim() {
	document.getElementById("submit").onclick = function () {
		updateValues();
		if (white_ball.position.y == 1.5) {
			white_ball.respawn();
			players[playerTurn].addPoints(-50);
		} else { 
			if (ballsHaveStopped()) {
				nextTurn();
				white_ball.fire(new THREE.Vector3(x, 0, z));
			}
		}
	}
}

function start() {
		aim()
}

/**
 * our render function it renders our scene
 */
var render = function () {
	var delta = clock.getDelta();
	balls.forEach(function(Ball) {
		Ball.update(delta, colBounds, poolHoles)
	}, this);

	calcScore();
	updateUI();
	renderer.render( scene, camera );
	requestAnimationFrame( render );
};

render();
start();