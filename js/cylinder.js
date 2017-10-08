
	/**
	 * cylinder class for easy constructment of cylinders
	 * @class
	 * @param {number} x x-coordinate of the object
	 * @param {number} y y-coordinate of the object
	 * @param {number} z z-coordinate of the object
	 * @param {string} constructorColor html color code
	 * @param {number} height height of cylinder
	 * @param {number} radius radius of the cylinder
	 */
export class cylinder {

    constructor(x, y, z, constructorColor, height, radiusTop, radiusBottom){
		var checkString = "#";
		var toString = constructorColor.toString();
		if (toString.substr(0, 1) == checkString){
			console.log("Color is used!");
			var cylinderMaterial = new THREE.MeshPhongMaterial({
				color : constructorColor
			});
		}
		else{
			console.log("Image is used!");
			var cylinderMaterial = new THREE.MeshBasicMaterial( { map: constructorColor } );
		}	
		
        	
		this.radiusTop = radiusTop;
		this.radiusBottom = radiusBottom;
		var geometry = new THREE.CylinderGeometry( radiusTop, radiusBottom, height); //CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded, thetaStart, thetaLength)
		
		this.mesh = new THREE.Mesh(geometry, cylinderMaterial);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
		this.mesh.position.set(x, y, z);
    }
}