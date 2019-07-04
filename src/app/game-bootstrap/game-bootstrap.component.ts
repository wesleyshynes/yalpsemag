import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SampleScene } from './sample-scene';

@Component({
  selector: 'app-game-bootstrap',
  templateUrl: './game-bootstrap.component.html',
  styleUrls: ['./game-bootstrap.component.less']
})
export class GameBootstrapComponent implements OnInit, OnDestroy, AfterViewInit {
  // SAMPLE CODE
  // https://github.com/weichen2046/phaser3-angular6-helloworld

  // SAMPLE GAME
  // https://github.com/mshin1995/DinoDash

  // FIXES
  // http://www.html5gamedevs.com/topic/38466-problems-with-phaser-3-polyfills-and-angular-6/

  game: Phaser.Game

  public readonly gameConfig: any = {
    type: navigator.userAgent.indexOf('FireFox') ? Phaser.CANVAS : Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
        debug: false,
      }
    },
    parent: 'content',
  };

  constructor() { }

  ngOnInit() {
    this.game = new Phaser.Game(this.gameConfig)

  }

  ngOnDestroy() {
    this.game.destroy(true);
  }

  ngAfterViewInit() {
      this.game.events.once('ready', () => {
        this.game.scene.add('Scene', new SampleScene(), true);
      });
  }

}
