//
import Phaser from 'phaser';

import TitleScreen from './scenes/TitleScreen';

import HelloWorldScene from './scenes/HelloWorldScene';

import GameOverScene from './scenes/game-over.js';

//import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: false,
      debug: true,
    },
  },
  scene: [TitleScreen, HelloWorldScene, GameOverScene],
  render: {
    pixelArt: true,
  },
  // parent: 'phaser-container',
  // dom: {
  //   createContainer: true,
  // },
  // plugins: {
  //   scene: [
  //     {
  //       key: 'rexUI',
  //       plugin: RexUIPlugin,
  //       mapping: 'rexUI',
  //     },
  //   ],
  // },
};

const game = new Phaser.Game(config);

//var textBox = scene.rexUI.add.textBox(config);

//game.scene.add('titlescreen', TitleScreen);
game.scene.start('title-screen');
//game.scene.add('over', GameOverScene);

//export default new Phaser.Game(config);
