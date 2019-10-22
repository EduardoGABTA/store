import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../interfaces/product';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }


  mostrarMensaje() {
    this.snackBar.open('Se agreo el producto ' + this.product.name, 'OK', {
      duration: 2000,
    });
  }
}
