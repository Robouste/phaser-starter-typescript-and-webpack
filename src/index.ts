import "phaser";

class Main extends Phaser.Scene {
	public image: Phaser.GameObjects.Image;

	constructor() {
		super("main");
	}

	preload() {
		this.load.image("logo", "assets/phaser3-logo.png");
	}
	create() {
		this.image = this.add.image(400, 300, "logo");
	}
	update() {
		this.image.rotation += 0.01;
	}
}

const config = {
	width: 800,
	height: 600,
	parnet: "thegame",
	scene: Main,
};

new Phaser.Game(config);
