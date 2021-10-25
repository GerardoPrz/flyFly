import { RestartButton } from '../components/restar-button.js';
export class Game extends Phaser.Scene{
    constructor(){
        super({ key: 'game'});
    }

    preload(){
        this.load.image('gameover','images/gameover.png');
        this.load.image('backgroundDay', "images/background-day.png");
        this.load.image('backgroundGameover', "images/background.png");
        this.load.image('player', "images/bluebird-midflap.png");
    }

    init(){
        this.restarbutton = new RestartButton(this);
    }

    create(){
        this.physics.world.setBoundsCollision(true, true, true, false);//activamos las "paredes del escenario"
        this.background = this.add.tileSprite(410, 270, 410, 1700, "backgroundDay");

        this.gameoverImage = this.add.image(400, 300, 'gameover');//creamos un elemento pre cargado y damos las coordenadas
        this.gameoverImage.visible = false;

        this.player = this.physics.add.sprite(350,250, 'player');
        this.player.anchor = 0.5;
        this.player.setScale(0.5,0.5);
        this.player.angle = 0;

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update(){
        this.background.tilePositionX -= 0.5;
        if(this.cursors.up.isDown)
        {
            this.player.setVelocityY(-200);
        }
        
        if(this.player.y > 500)
        {
            this.endGame();
        }

    }

    endGame(){
        this.scene.start('gameover');
    }

}