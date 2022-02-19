const BaseBot = require("./baseBot");
const BotMaf = require("./botMaf");
const StrangeBot = require("./strangeBot");
const Camorra = require("./camorra")
const FancyBot = require("./fancyBot")
const BandaBassotti = require("./bandaBassotti")
const {TFTBadBot, TFTGoodBot} = require("./tftbot")
const reader = require("readline-sync"); 


startGenerationsTournament();


function startTournament(players){

    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        player.newGame()
    }

    for (let i = 0; i < players.length; i++) {
        const firstPlayer = players[i];
        for (let j = 0; j < players.length; j++) {
            const secondPlayer = players[j];
            for (let k = 0; k < 20; k++) {
                match(firstPlayer, secondPlayer);
                
            }
        }
    }

    players.sort((p1, p2) => p2.points - p1.points);



    return players;
}


function startGenerationsTournament(){
    let players = createFirstGeneration();;

    for (let i = 0; i < 10; i++) {
        players = startTournament(players);

        for (let j = 0; j < players.length; j++) {
            const player = players[j];
            console.log("Gen: " + (i+1) + " Pos: " + (j+1) + " " +player.constructor.name + ": " + player.points);
        }

        
        const pippo = reader.question("continuo?");


        if (i !== 9) {
            players = generateNewGeneration(players)
        }
        
    }

}

function generateNewGeneration(players){
    let halfPlayers = players.slice(0, 30);
    let newPlayers = [];
    for (let i = 0; i < halfPlayers.length; i++) {
        const player = halfPlayers[i];
        player.newGeneration();
        const playerClone = clonePlayer(player);
        newPlayers.push(player, playerClone);
    }
    shuffleArray(newPlayers);
    return newPlayers;
}

function clonePlayer(player){
    let clone = Object.assign(Object.create(Object.getPrototypeOf(player)), player)
    return clone;
}




function match(bot1, bot2) {
    const bot1Choose = bot1.play()
    const bot2Choose = bot2.play()

    bot1.memorize(bot2Choose);
    bot2.memorize(bot1Choose);

    bot1.points = calculatePoints(bot1Choose, bot2Choose);
    bot2.points = calculatePoints(bot2Choose, bot1Choose);
}


function calculatePoints(myChoose, enemyChoose) {
    if(myChoose === 1 && enemyChoose === 1){
        return 3;
    } else if (myChoose === 1 && enemyChoose === 0) {
        return 0;
    } else if (myChoose === 0 && enemyChoose === 1) {
        return 5;
    } else {
        return 1;
    }
}


function createFirstGeneration(params) {
    let players = [];

    for (let i = 0; i < 10; i++) {
        const bot = new StrangeBot();
        const bot2 = new BaseBot();
        const bot1 = new BotMaf();
        const bot3 = new Camorra();
        const bot4 = new FancyBot();
        const bot5 = new BandaBassotti();
        const bot6 = new TFTBadBot();
        const bot7 = new TFTGoodBot();


        players.push(bot1, bot3, bot4, bot5, bot6, bot7, bot, bot2);
    }

    shuffleArray(players);
    return players;
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}