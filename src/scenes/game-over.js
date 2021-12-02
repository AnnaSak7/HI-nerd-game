import Phaser from 'phaser';

import WebFontFile from './WebFontFile';

import { score, scoreStringOnScreen } from './HelloWorldScene';
//import InputText from 'phaser3-rex-plugins/plugins/inputtext';

//import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';

//import { TextBox } from 'phaser3-rex-plugins/templates/ui/ui-components.js';

var sky;

// import HelloWorldScene from "./HelloWorldScene";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  preload() {
    const fonts = new WebFontFile(this.load, 'Press Start 2P');
    this.load.addFile(fonts);
    this.load.image('bg', './assets/big-bg.png');

    this.load.html('nameInput', './assets/nameInput.html');

    // this.laod.scenePlugin({
    //   key: 'rexuiplugin',
    //   url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
    //   sceneKey: 'rexUI'
    // })

    // this.load.plugin('rextexteditplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js', true)

    // this.load.scenePlugin(
    //   'rexuiplugin',
    //   'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
    //   'rexUI',
    //   'rexUI'
    // );
  }

  create() {
    sky = this.add.tileSprite(500, 100, 1024, 1024, 'bg');

    this.add
      .text(400, 80, 'Game Over!', {
        fontSize: '50px',
        fontFamily: '"Press Start 2P"',
      })
      .setOrigin(0.5);

    this.add
      .text(400, 130, 'Press Enter To Try Again', {
        fontSize: '20px',
        fontFamily: '"Press Start 2P"',
      })
      .setOrigin(0.5);

    this.add
      .text(400, 230, scoreStringOnScreen + score, {
        fontSize: '30px',
        fontFamily: '"Press Start 2P"',
      })
      .setOrigin(0.5);

    this.input.keyboard.once('keydown-ENTER', () => {
      console.log('enter down');
      // start title screen scene
      this.scene.start('Highscore');
    });

    // this.add
    //   .text(400, 300, 'Enter your name:', {
    //     font: '32px Courier',
    //     fontFamily: '"Press Start 2P"',
    //     fill: '#ffffff',
    //   })
    //   .setOrigin(0.5);

    // var textEntry = this.add
    //   .text(400, 350, '', {
    //     font: '32px Courier',
    //     fontFamily: '"Press Start 2P"',
    //     fill: '#ffff00',
    //   })
    //   .setOrigin(0.5);

    // this.input.keyboard.on('keydown', function (event) {
    //   if (event.keyCode === 8 && textEntry.text.length > 0) {
    //     textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
    //   } else if (
    //     event.keyCode === 32 ||
    //     (event.keyCode >= 48 && event.keyCode < 90)
    //   ) {
    //     textEntry.text += event.key;
    //   }
    // });
  }

  update() {
    sky.tilePositionY += 0.5;
  }
}
