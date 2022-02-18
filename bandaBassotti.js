
const BaseBot = require("./baseBot.js");

class BandaBassotti extends BaseBot{


    constructor(){
        super();
    }

    newGeneration(){
        super.newGeneration();
    }

    static play(){
        //let round = [];
        let y = Math.random();
        if (y <= 0.8){
            y = 0;
        } else {
            y= 1;
        }

        //round[0] = y;

/*
        y = Math.random();
        if (y < 1){
            y = 0;
        } else {
            y= 1;
        }
        round[1] = y;
*/
        console.log(y);
        return y;
    }

    static newGame(){
        let gameHistory = [];
        this.history = gameHistory;
        let opponentChoices = [0];
        this.opChoices = opponentChoices;
        let myPoints = 0;

        for (let i = 0; i < 10; i++) {
            let result = BandaBassotti.play();
            this.memorize(result[0]);
            myPoints += this.countPoints(result);
        }

        console.log(BandaBassotti.history);
        this.mieiPunti = myPoints;
        console.log(this.mieiPunti);
        return this.mieiPunti;
        
    }

    static memorize(number){
        //BandaBassotti.history.push(number);
        BandaBassotti.opChoices.push(number);
    }

    static countPoints(result){
        if (result[0] === 0 && result[1] === 0) {
            return 1;
        } else if (result[0] === 1 && result[1] === 1) {
            return 3;
        } else if (result[0] === 0 && result[1] === 1) {
            return 5;
        } else if (result[0] === 1 && result[1] === 0) {
            return 0;
        }
    }
}

module.exports = BandaBassotti;