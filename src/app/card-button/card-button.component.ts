import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
  //encapsulation: ViewEncapsulation.ShadowDom, // nenhum estilo de fora/global entra nesse componente, dificilmente vai precisar usar isso
  encapsulation: ViewEncapsulation.Emulated, // padrão do angular
  //encapsulation: ViewEncapsulation.None // remove a encapsulação desse componente
}) // não existe um cenario que seja necessário usar isso
export class CardButtonComponent {

}
