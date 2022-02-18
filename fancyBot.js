
const BaseBot = require("./baseBot.js")

class FancyBot extends BaseBot {

    constructor() {
        super();
        this.gameHistory = []
    }

    play() {

        if (this.gameHistory.length < 2) {
            return 0;
        }
        let enemySilence = 0;
        let enemyTreason = 0;

        for (let i = 0; i < this.gameHistory.length; i++) {
            if (this.gameHistory[i] === 1) {
                enemySilence++
            } else {
                enemyTreason++
            }
        }

        if (enemyTreason >= 3 && enemyTreason - enemySilence >= 3) {
            return 0
        } 
        
        if (enemySilence >= 3 && enemySilence - enemyTreason >= 3) {
            return (Math.random() < 0.5 ? 0 : 1)
        }

        return (Math.random() < 0.8 ? 1 : 0)
    }

    
    memorize(number) {
        this.gameHistory.push(number)
    }

}

module.exports = FancyBot