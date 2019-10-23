import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from '../../../interfaces/product';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.scss']
})
export class InfoProductComponent implements OnInit {

  product: Product;

  constructor(private dialogRef: MatDialogRef<InfoProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Product) {
    this.product = data;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
