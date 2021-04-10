
class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    create() {
        // Green UI BG
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width,
            borderUISize * 2, 0x00FF00).setOrigin(0,0)

        // White Borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, game.config.height - borderUISize,
            game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(game.config.width - borderUISize, 0,
            borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

    }
}