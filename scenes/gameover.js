import { RestartButton } from "../components/restar-button.js";

export class Gameover extends Phaser.Scene{
    constructor(){
        super({ key: 'gameover'});
        this.restartButton = new RestartButton(this)
    }

    preload(){
        this.load.image('gameover', 'images/gameover.png');
        this.load.image('backgroundGameover', 'images/background.png');
        this.restartButton.preload();
    }

    create(){
        this.add.image(410, 250, 'backgroundGameover');
        this.restartButton.create();
        this.gameoverImage = this.add.image(400, 90, 'gameover');
    }

}