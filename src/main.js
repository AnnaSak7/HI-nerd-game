import Phaser, { GameObjects } from 'phaser';

import TitleScreen from './scenes/TitleScreen';

import HelloWorldScene from './scenes/HelloWorldScene';
import { World } from 'matter';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [TitleScreen, HelloWorldScene],
};

//export default new Phaser.Game(config);

const game = new Phaser.Game(config);

game.scene.add('titlescreen', TitleScreen);
//game.scene.add('helloworld', HelloWorldScene);
game.scene.start('titlescreen');
