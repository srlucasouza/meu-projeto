import { Component , OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent {

  public title: string = "Bem Vindo"

  constructor() { };

}
