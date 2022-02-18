class BaseBot{


    constructor(){
        let gameHistory = [];
    }

    play(){
        return 1;
    }

    newGame(){
        gameHistory = [];
    }

    newGeneration(){

    }

    memorize(number) {
        gameHistory.push(number)
    }

}
