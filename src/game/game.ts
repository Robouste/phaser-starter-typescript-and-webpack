export class Game extends Phaser.Scene {
	public image: Phaser.GameObjects.Image;

	constructor() {
		super("game");
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
