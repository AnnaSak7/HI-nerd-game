import Phaser from 'phaser';

import WebFontFile from './WebFontFile';

import { score, scoreStringOnScreen } from './HelloWorldScene';
import InputText from 'phaser3-rex-plugins/plugins/inputtext';

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
    // var textBox = new TextBox(scene, config);
    // this.scene.add.existing(textBox);

    // var textBox = new TextBox(config);
    // this.add.existing(textBox);
    // textBox = this.scene.rexUI.add.textBox({
    //   // x: 0,
    //   // y: 0,
    //   // anchor: undefined,
    //   // width: undefined,
    //   // height: undefined,

    //   orientation: 0,

    //   background: backgroundGameObject,
    //   icon: iconGameObject,
    //   iconMask: false,
    //   text: textGameObject,
    //   action: actionGameObject,
    //   actionMask: false,

    //   space: {
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,

    //     icon: 0,
    //     text: 0,
    //   },

    //   // page: {
    //   //    maxLines: undefined,
    //   //    pageBreak: '\f\n',
    //   // },
    //   // type: {
    //   //    wrap: false,
    //   //    speed: 333,
    //   // },

    //   // name: '',
    //   // draggable: false,
    //   // sizerEvents: false,
    // });
    // // const text = this.add.text(400, 300, 'Hello World', {
    // //   fixedWidth: 150,
    // //   fixedHeight: 36,
    // // });
    // // text.setOrigin(0.5, 0.5);

    // // text.setInteractive().on('pointerdown', () => {
    // //   this.rexUI.edit(text);
    // // });

    // // this.formUtil = new FormUtil({ scene: this, rows: 11, cols: 11 });
    // // this.formUtil = showNumbers();
    // // this.formUtil.scaleToGameW('utext', 0.4);
    // // this.formUtil.placeElementAt(60, 'utext');
    // // this.formUtil.showElement('utext');

    // const name = this.add.text(100, 100, 'hello');
    // this.input.on('pointerdown', () => {
    //   name.text = 'Anna';
    //   console.log('pointerdown Anna');
    // });

    // this.input.on('pointeruip', () => {
    //   name.text = 'Sakurai';
    // });

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
      this.scene.start('title-screen');
    });

    //input field

    // var text = this.add
    //   .text(400, 350, 'Please enter your name', {
    //     fontSize: '20px',
    //     fontFamily: '"Press Start 2P"',
    //   })
    //   .setOrigin(0.5);

    // var element = this.add.dom(400, 400).createFromCache('nameform');
    // element.addListener('click');
    // element.on('click', function (event) {
    //   if (event.target.name === 'playButton') {
    //     var inputText = this.getChildByName('nameField');

    //     //  Have they entered anything?
    //     if (inputText.value !== '') {
    //       //  Turn off the click events

    //       //  Hide the login element
    //       //this.setVisible(false);

    //       //  Populate the text with whatever they typed in
    //       text.setText('Welcome ' + inputText.value);
    //     } else {
    //       //  Flash the prompt
    //       this.scene.tweens.add({
    //         targets: text,
    //         alpha: 0.2,
    //         duration: 250,
    //         ease: 'Power3',
    //         yoyo: true,
    //       });
    //     }
    //   }
    // });

    // this.tweens.add({
    //   targets: element,
    //   y: 300,
    //   duration: 3000,
    //   ease: 'Power3',
    // });

    this.add
      .text(400, 300, 'Enter your name:', {
        font: '32px Courier',
        fontFamily: '"Press Start 2P"',
        fill: '#ffffff',
      })
      .setOrigin(0.5);

    var textEntry = this.add
      .text(400, 350, '', {
        font: '32px Courier',
        fontFamily: '"Press Start 2P"',
        fill: '#ffff00',
      })
      .setOrigin(0.5);

    this.input.keyboard.on('keydown', function (event) {
      if (event.keyCode === 8 && textEntry.text.length > 0) {
        textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
      } else if (
        event.keyCode === 32 ||
        (event.keyCode >= 48 && event.keyCode < 90)
      ) {
        textEntry.text += event.key;
      }
    });
  }

  update() {
    sky.tilePositionY += 0.5;
  }
}
