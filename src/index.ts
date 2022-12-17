import "phaser";
import { Game } from "./game/game";

const config = {
	width: 800,
	height: 600,
	parent: "thegame",
	scene: Game,
};

new Phaser.Game(config);
