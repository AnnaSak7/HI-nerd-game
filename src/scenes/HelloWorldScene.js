import Phaser from 'phaser';

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('helloworld');
  }

  preload() {
    this.load.image('bg', './assets/big-bg.png');
  }

  create() {
    this.add.image(400, 300, 'bg');
  }
}
