import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent implements OnInit, OnChanges {

  @ViewChild('closeProductModalBtn', {static: true}) closeProductModalBtn: ElementRef;
  @Input() productSelected: Product;
  @Input() modalType: 'ADD'|'EDIT';
  @Output() modalTypeChange = new EventEmitter<'ADD'|'EDIT'>();
  @Output() productCreated = new EventEmitter<Product>();
  @Output() productUpdated = new EventEmitter<Product>();
  
  isSendingData: boolean = false;
  isErrorResponse: boolean = false;

  title: string = '';
  saveButtonText: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    console.log()
  }

  ngOnChanges() {
    if (this.modalType === 'EDIT') {
      this.title = 'Actualizar producto';
      this.saveButtonText = 'Actualizar';
    }
    if (this.modalType === 'ADD') {
      this.title = 'Añadir producto';
      this.saveButtonText = 'Añadir';
    }
  }
  
  closeModal() {
    setTimeout(() => {
      this.isErrorResponse = false;
      this.modalTypeChange.emit('EDIT');
    }, 500);
  }

  saveProduct() {
    this.isSendingData = true;
    if (this.modalType === 'EDIT') {
      this.productsService.updateProduct(this.productSelected).subscribe(
        (productUpdated: Product) => {
          this.productUpdated.emit(productUpdated);
          this.closeProductModalBtn.nativeElement.click();
        },
        () => {
          this.isErrorResponse= true;
          this.isSendingData = false;
        },
        () => {
          this.isSendingData = false;
        }
      )
    }
    if (this.modalType === 'ADD') {
      this.productsService.saveProduct(this.productSelected).subscribe(
        (productCreated: Product) => {
          this.productCreated.emit(productCreated);
          this.closeProductModalBtn.nativeElement.click();
        },
        () => {
          this.isErrorResponse= true;
          this.isSendingData = false;
        },
        () => {
          this.isSendingData = false;
        }
      )
    }
  }

}
