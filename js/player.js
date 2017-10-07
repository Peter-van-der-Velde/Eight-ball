/**
 * 
 * @param {string} name name of the player
 */
class Player {

    constructor(name) {
        this.name = name;
        this.myRound = false;
        this.totalPoints = 0;
    }

    /**
     * change the name of this player
     * @param {string} newName 
     */
    changeName(newName) {
        this.name = newName;
    }
}