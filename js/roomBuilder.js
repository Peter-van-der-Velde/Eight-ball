//roomBuilder
var startX, startZ, localX, localZ;		//local variables for position to do math's with
var floor; 										//a single floor tile
var roomItems = new THREE.Group();				//all tiles combined


let roomBuilder = function (length, width, height, floorTexture, wallTexture) {
	startX = (length / 2) * -1;
	startZ = (width / 2) * -1;
	localX = 0;
    localY = 0;
	localZ = 0;
	for(localZ; localZ <= width; localZ++ ){
		for(localX; localX <= length; localX++){
			floor = new textureBox(startX, 0, startZ, floorTexture, 1, 0.1, 1);
			roomItems.add(floor);
			startZ++;
			console.log("Z - " + localZ + " | X - " + localX);
            if (localX = 0){
                wall = new textureBox(startX, 0, startZ, wallTexture, 2, 0.2, 2);
                roomItems.add(floor);
                console.log("Wall Drawn");
            }
		}
		localX = 0;
		startX++;
		startZ = (width / 2) * -1;
	}
	return roomItems;
}