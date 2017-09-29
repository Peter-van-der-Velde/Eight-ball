//Constructor of a billiardBall
export class BilliardBall {

    constructor(x, y, z, constructorColor){

        this.mesh;
        this.position = new Vector3(x, y, z);
        this.velocity = new Vector3(0, 0, 0);
        this.acceleration = new Vector3(0, 0, 0);
        this.friction = 0.995;
        this.restitution = 0.5; // bounciness of said ball
        this.size = 0.03;

        var billiardBallMaterial = new THREE.MeshPhongMaterial({
            fog : true,
            color : constructorColor
        });

        var billiardBallSize = new THREE.SphereGeometry(this.size);
        this.mesh = new THREE.Mesh(billiardBallSize, billiardBallMaterial);
    
        this.mesh.position.set(this.position.x, this.position.y, this.position.z)

    }

    updatePosition(position) {
        this.mesh.position.x = position.x;
        this.mesh.position.y = position.y;
        this.mesh.position.z = position.z;
    }

    update(dt, bounds) {    // dt is the difference in time 
        this.velocity
            .add(this.acceleration)
            .mul(this.friction);

        this.position
            .add(this.velocity)
            .mul(dt);

        if (this.position.x < bounds.x) {
            //this.position.x = bounds.x;
            this.velocity.x *= -this.restitution;
        } else if (this.position.x > bounds.cx) {
            //this.position.x = bounds.cx - this.size;
            this.velocity.x *= -this.restitution;            
        }

        if (this.position.z < bounds.cz) {
            //this.position.z = bounds.z;
            this.velocity.z *= -this.restitution;
        } else if (this.position.z > bounds.cz) {
            //this.position.y = bounds.cy - this.size;
            this.velocity.y *= -this.restitution;     
        }

        this.updatePosition(this.position)
        console.log("p2: ");
        console.log(this.mesh.position)
        console.log("p: ");
        console.log(this.position)
        console.log("v: ");
        console.log(this.velocity)
        console.log("dt: ")
        console.log(dt)
        console.log("bd: ")
        console.log(bounds)
        
    }
}