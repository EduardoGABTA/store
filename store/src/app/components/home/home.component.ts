import {Component, OnInit} from '@angular/core';
import {Product} from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Array<Product> = [];

  constructor() {
    this.products = [
      {
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      },
      {
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      },{
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      },{
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      },
      {
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      },
      {
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      }, {
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      }, {
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      }
      , {
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      }, {
        count: 10,
        description: 'Nuevo producto',
        icon: 'img/ccc.png',
        name: 'PLayera',
        price: '$1500',
        uuid: '123-2387sdk-sdsdee'
      }
    ];
  }

  ngOnInit() {
  }

}
