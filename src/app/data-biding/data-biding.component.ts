import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {
  public nome: string = 'Lucas';

  public idade: number = 28;

  public checkDisabled: boolean = false;

  public imgSrc: string = "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg";

  public imgTitle: string = "Proprite";

  public position: {x: number, y: number} = {x: 0 , y: 0};

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
