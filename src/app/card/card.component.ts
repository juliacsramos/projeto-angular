import { Component } from '@angular/core';

interface Plano {
  infos: IInfos;
}
interface IInfos {
  tipo: string;
  preco: number;
}

@Component({ // decorator
  selector: 'app-card', // nome do componente quando for referenciar ele no html
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano: Plano = {
    infos: {
      tipo: 'Básico',
      preco: 150
    }
  }
}
