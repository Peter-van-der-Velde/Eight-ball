var Light = new THREE.DirectionalLight( 0xdddddd, 0.8 );
Light.position.set( -8, 8, 8 );

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set (0, 20, 0);

var LightA = new THREE.AmbientLight( 0x000 );