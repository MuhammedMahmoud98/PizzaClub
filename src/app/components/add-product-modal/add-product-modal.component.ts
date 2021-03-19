import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {
  productGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<AddProductModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  addProduct(): void {
    this.dialogRef.close(this.productGroup.value);
  }
}
