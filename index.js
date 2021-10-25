import { Game } from "./scenes/game.js"
import { Gameover } from "./scenes/gameover.js"
const config = {
    type: Phaser.Auto,
    with: 370,
    height: 550,
    scene: [Game, Gameover],
    physics:{
        default: 'arcade',
        arcade:{
            gravity: {y: 400},
            debug: false
        }
    }
}

var game = new Phaser.Game(config);