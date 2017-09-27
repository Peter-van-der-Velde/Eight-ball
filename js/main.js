	var scene = new THREE.Scene();
	var aspect = window.innerWidth / window.innerHeight;
	var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	console.log(renderer);

	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target.set(0,0,0);
	//controls.update();

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
	scene.add(eight_ball_table);

	//Creating the balls (lol)
	var white_ball = new ball(-1.0, 1.1, 0, '#FFFFFF');
	var ball_1 = new ball(1.0, 1.1, 0, '#FF0000');
	var ball_2 = new ball(1.1, 1.1, 0, '#FFFF00');
	var ball_3 = new ball(1.2, 1.1, 0, '#008000');
	var ball_4 = new ball(1.3, 1.1, 0, '#FF69B4');

	scene.add(white_ball);
	scene.add(ball_1); 
	scene.add(ball_2); 
	scene.add(ball_3); 
	scene.add(ball_4);

	//Set the camera position
	camera.position.x = -2;
	camera.position.y = 1.5;
	camera.position.z = 1.5;
	camera.lookAt(green_mat.position);

	// // create a point light
	const pointLight = new THREE.PointLight(0xFFFFFF);
	// set the position of the light
	pointLight.position.x = 0;
	pointLight.position.y = 20;
	pointLight.position.z = 0;
	pointLight.lookAt( green_mat );
	scene.add(pointLight);
	var Light = new THREE.DirectionalLight( 0xdddddd, 0.8 );
	Light.position.set( -8, 8, 8 );
	Light.lookAt ( green_mat );
	scene.add(Light);

	var LightA = new THREE.AmbientLight( 0x000 );
	scene.add(LightA);
	//light.position.set ()
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
	   //controls.update();
	}

	animate();
	render();