class FurboBot{


    constructor(){
        this._points = 0;
        this.set = 0;
        let evil = new EvilStrategy();
        let bad = new TFTBadStrategy();
        let good = new TFTGoodStrategy();
        let memory = new LongMemoryStrategy();
        this.strategies = [evil, bad, good, memory];
        this.enemyHistory = [];
        this.selectedStrategy = this.strategies[0];
    }

    get points(){
        return this._points;
    }

    set points(value){
        this._points += value;
        this.selectedStrategy.gamePoints += value;
        
    }

    play(){
        if (this.set < this.strategies.length){
            this.selectedStrategy = this.strategies[this.set];
            this.selectedStrategy.selectedTime += 1;
            return this.selectedStrategy.getResponse(this.enemyHistory);
        } else {
            this.selectedStrategy = this.strategies.reduce((p,c) => p.gamePoints >= c.gamePoints ? p : c);
            this.selectedStrategy.selectedTime += 1;
            return this.selectedStrategy.getResponse(this.enemyHistory);
        }
        
    }



    newGame(){
        for (const str of this.strategies) {
            console.log(str.constructor.name + str.gamePoints);
        }
        this.enemyHistory = [];
        this.set +=1;
        for (const strategy of this.strategies) {
            strategy.newGame()
        }
    }

    newGeneration(){
        this._points = 0;
        this.set = 0;
    }

    memorize(number) {
        this.enemyHistory.push(number);
    }

}

class EvilStrategy{
    
    constructor(){
        this.gamePoints = 0;
        this.selectedTime = 0;
    }

    newGame(){
        this.gamePointss = 0;
    }

    getResponse(enemyHistory){
        return 0;
    }


}

class TFTGoodStrategy{

    constructor(){
        this.gamePoints = 0;
        this.selectedTime = 0;
    }

    newGame(){
        this.gamePoints = 0;
    }

    getResponse(enemyHistory){
        if (enemyHistory.lenght === 0) {
            return 1;
        }
        else {
            return enemyHistory[enemyHistory.lenght-1];
        }
    }
    
}

class TFTBadStrategy{

    constructor(){
        this.gamePoints = 0;
        this.selectedTime = 0;
    }

    newGame(){
        this.gamePoints = 0;
    }

    getResponse(enemyHistory){
        if (enemyHistory.lenght === 0) {
            return 0;
        }
        else {
            return enemyHistory[enemyHistory.lenght-1];
        }
    }
    
}

class LongMemoryStrategy{

    constructor(){
        this.gamePoints = 0;
        this.selectedTime = 0;
    }

    newGame(){
        this.gamePoints = 0;
    }

    getResponse(enemyHistory){
        if (enemyHistory.lenght === 0) {
            return 1;
        }
        else {
            let collaborations = enemyHistory.filter(v => v === 1).length;
            let betrayals = enemyHistory.filter(v => v === 0).length;
            if (collaborations < betrayals) {
                return 0;
            } else {
                return 1;
            }
        }
    }
    
}


module.exports = FurboBot;