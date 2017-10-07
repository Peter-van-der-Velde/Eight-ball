var balls = [];

/**
 * a ball class for the billiard balls
 * @class
 * @param {number} x x position of the ball
 * @param {number} y y position of the ball
 * @param {number} z z position of the ball
 * @param {number} constructorColor color of the ball 
 */
class Ball {

    constructor(x, y, z, constructorColor){

        this.mesh;
        this.position = new THREE.Vector3(x, y, z);
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.acceleration = new THREE.Vector3(0, 0, 0);
        this.friction = 0.995;

        this.restitution = 1; // bounciness of said ball
        this.size = 0.03;
        this.weight = 1;

        var billiardBallMaterial = new THREE.MeshPhongMaterial({
            fog : true,
            color : constructorColor
        });

        var billiardBallSize = new THREE.SphereGeometry(this.size);
        this.mesh = new THREE.Mesh(billiardBallSize, billiardBallMaterial);
        //add shadows
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    }

    /**
     * Updates the position of the mesh
     * @param {THREE.Vector3} newPosition 
     */
    updateMesh(newPosition) {
        this.mesh.position.x = newPosition.x;
        this.mesh.position.y = newPosition.y;
        this.mesh.position.z = newPosition.z;        
    }

    /**
     * Calculates the total velocity
     */
    getTotalVelocity() {
        return Math.sqrt(Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.z, 2));
    }

    /**
     * Calculates the collision between this ball and another ball
     * @param {ball} ball_2 the other ball
     * @param {number} delta 
     */
    calcCollision(ball_2, delta) {
        var distanceBalls = this.position.distanceTo(ball_2.position);

        let count = 0;
        while(distanceBalls <= (this.size + ball_2.size) && count <= 100)
        {
            distanceBalls = this.position.distanceTo(ball_2.position);
            
            this.position.x += this.velocity.x * -delta;
            this.position.z += this.velocity.z * -delta;

            // this is needed because else the first shot get`s fucked up.
            for (let i = 0; i < balls.length; i++) {
                if (balls[i] != this) {
                    if (this.position.distanceTo(balls[i].position) < this.size*2) {
                        count++;
                        continue;
                    }
                }
            }
            break;
        }
        var dx = this.position.x - ball_2.position.x;
        var dz = this.position.z - ball_2.position.z;

        var contactAngle = Math.atan2(dz, dx);

        var totalVelocityA = this.getTotalVelocity();
        var totalVelocityB = ball_2.getTotalVelocity();
        var angleA = Math.atan2(this.velocity.z, this.velocity.x);
        var angleB = Math.atan2(ball_2.velocity.z, ball_2.velocity.x);

        this.velocity.x = totalVelocityB * Math.cos(angleB - contactAngle) * Math.cos(contactAngle) + totalVelocityA * Math.sin(angleA - contactAngle) * Math.cos(contactAngle + (Math.PI / 2));
        this.velocity.z = totalVelocityB * Math.cos(angleB - contactAngle) * Math.sin(contactAngle) + totalVelocityA * Math.sin(angleA - contactAngle) * Math.sin(contactAngle + (Math.PI / 2));

        ball_2.velocity.x = totalVelocityA * Math.cos(angleA - contactAngle) * Math.cos(contactAngle) + totalVelocityB * Math.sin(angleB - contactAngle) * Math.cos(contactAngle + (Math.PI / 2));
        ball_2.velocity.z = totalVelocityA * Math.cos(angleA - contactAngle) * Math.sin(contactAngle) + totalVelocityB * Math.sin(angleB - contactAngle) * Math.sin(contactAngle + (Math.PI / 2));

    }

    /**
     * updates the position of the ball
     * @param {number} dt the difference in time 
     * @param {bounds} bounds 
     */
    update(dt, bounds) { 
        
        this.velocity.x = (this.velocity.x + this.acceleration.x) * this.friction;
        this.velocity.y = (this.velocity.y + this.acceleration.y) * this.friction;
        this.velocity.z = (this.velocity.z + this.acceleration.z) * this.friction;
        
        var posx = this.position.x + (this.velocity.x * dt);
        var posy = this.position.y + (this.velocity.y * dt);
        var posz = this.position.z + (this.velocity.z * dt);

        this.position = new THREE.Vector3(posx, posy, posz);
 
        if (this.position.x < bounds.x) {
            this.position.x = bounds.x;
            this.velocity.x *= -this.restitution;
        } else if (this.position.x > bounds.cx) {
            this.position.x = bounds.cx - (this.size/100);
            this.velocity.x *= -this.restitution;            
        }

        if (this.position.z < bounds.z) {
            this.position.z = bounds.z;
            this.velocity.z *= -this.restitution;
        } else if (this.position.z > bounds.cz) {
            this.position.z = bounds.cz - (this.size/100);
            this.velocity.z *= -this.restitution;     
        }

        for (let i = 0; i < balls.length; i++) {
            if (balls[i] != this) {
                if (this.position.distanceTo(balls[i].position) < this.size*2) {
                    this.calcCollision(balls[i], dt);
                }
            }
        }
        this.updateMesh(this.position)
    }
}