import { Component } from '@angular/core';

@Component({ // decorator
  selector: 'app-card', // nome do componente quando for referenciar ele no html
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano = {
    tipo: 'Simples',
    preco: 'R$100,00'
  }
}
