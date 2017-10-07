/**
 * a class for the white balls who one might fire
 * @class
 * @extends Ball
 * @param {number} x x position of the ball
 * @param {number} y y position of the ball
 * @param {number} z z position of the ball
 * @param {number} constructorColor color of the ball 
 */
class WhiteBall extends Ball {
    
    /**
     * hehehe
     */
    lol() {
        console.log("balls")
    }

    /**
     * Respawns the ball onto the pooltable
     */
    respawn() {
        this.position = new THREE.Vector3(0, 1.08, 0);
    }

    /**
     * fire the ball towards an position.
     * @param {THREE.Vector3} newVelocity 
     */
    fire(newVelocity) {
        this.velocity = newVelocity;
    }
}