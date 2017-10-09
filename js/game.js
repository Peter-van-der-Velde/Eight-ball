/**
 * the main game class here are the game mechanics stored.
 * @class
 * @deprecated
 * @param {Player[]} players array of players
 * @param {Ball[]} balls array of players
 */
class Game {

    constructor(players, balls) {
        this.turn = 0;
        this.playerTurn = 0;
        this.players = players;
        this.x;
        this.z;
        this.amountOfBalls = balls.length;
    }

    nextTurn() {
        this.turn++;
        if (this.players.length < players.length())
            this.playerTurn++;
        else
            this.playerTurn = 0;
    }

    cameraOverview() {

    }

    calcScore() {
        //let score = (this.amountOfBalls - amountOfBallsNow) * 100;
        //return score
    }

    updateUI() {

    }

    updateValues() {
        this.x = document.getElementById("x").value;
        this.z = document.getElementById("z").value;
    }

    aim() {
            document.getElementById("submit").onclick = function () {
            this.x = document.getElementById("x").value;
            this.z = document.getElementById("z").value;
            white_ball.fire(new HTMLHRElement.Vector3(this.x, 0, this.z))
        }
    }

    start() {
        this.aim()
    }
}