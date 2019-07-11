import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SimpleBaseLineScene1 } from './simple-baseline-scene-1';

@Component({
  selector: 'app-simple-baseline',
  templateUrl: './simple-baseline.component.html',
  styleUrls: ['./simple-baseline.component.less']
})
export class SimpleBaselineComponent implements OnInit, OnDestroy, AfterViewInit {

    game: Phaser.Game

    public readonly gameConfig: any = {
      type: navigator.userAgent.indexOf('FireFox') ? Phaser.CANVAS : Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false,
        }
      },
      parent: 'content',
    };

  constructor() {

  }

  ngOnInit() {
      this.game = new Phaser.Game(this.gameConfig)
  }

  ngOnDestroy() {
      this.game.destroy(true);
  }

  ngAfterViewInit() {
      this.game.events.once('ready', () => {
        this.game.scene.add('Main Scene', new SimpleBaseLineScene1(), true);
      });
  }

}
