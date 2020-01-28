import { Component, OnInit } from '@angular/core';

import {RadioOption} from '../shared/radio/radio-option.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label:'Dinheiro',value:'Din'},
    {label:'Cartão de Débito',value:'Deb'}, 
    {label:'Cartão de Crédito',value:'Cred'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
