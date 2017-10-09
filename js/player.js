/**
 * 
 * @param {string} name name of the player
 */
class Player {

    constructor(name) {
        this.name = name;
        this.myRound = false;
        this.totalPoints = 0;
        this.body;
    }

    /**
     * change the name of this player
     * @param {string} newName 
     */
    changeName(newName) {
        this.name = newName;
    }

    /**
     * adds points to the totalPoints variable of the player object
     * @param {number} points amount of points to be added 
     */
    addPoints(points) {
        this.totalPoints += points;
    }
}