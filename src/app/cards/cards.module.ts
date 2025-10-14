import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';


@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent
  ]
})
export class CardsModule { }
