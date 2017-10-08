
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

    constructor(x, y, z, constructorColor, height, radius){
        var cylinderMaterial = new THREE.MeshPhongMaterial({
			color : constructorColor
		});			

		var geometry = new THREE.CylinderGeometry( radius, radius, height); //CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded, thetaStart, thetaLength)
		
		this.mesh = new THREE.Mesh(geometry, cylinderMaterial);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
		this.mesh.position.set(x, y, z);

    }
}