import {Component, OnInit} from '@angular/core';
import {Product} from '../../interfaces/product';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Array<Product> = [];
  products2: Array<Product> = [];
  productsSelected: Array<number> = [];

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

  addProduct(value: any) {
    console.log(value);
    this.productsSelected.push(value);
    console.log(this.productsSelected);
  }

  drop(event: any) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
