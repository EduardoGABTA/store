import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Product} from '../../interfaces/product';
import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {InfoProductComponent} from '../../shared/modals/info-product/info-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output() uuidProduct = new EventEmitter();
  constructor(private snackBar: MatSnackBar,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }


  anadirAlCarro() {
    this.uuidProduct.emit(this.product.uuid);
    this.snackBar.open('Se agreo el producto ' + this.product.name, 'OK', {
      duration: 2000,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InfoProductComponent, {
      width: '600px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
