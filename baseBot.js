class BaseBot{


    constructor(){
        this._points = 0;
    }

    get points(){
        return this._points;
    }

    set points(value){
        this._points += value;
    }

    play(){
        return 1;
    }

    newGame(){

    }

    newGeneration(){
        this._points = 0;
    }

    memorize(number) {

    }

}


module.exports = BaseBot;