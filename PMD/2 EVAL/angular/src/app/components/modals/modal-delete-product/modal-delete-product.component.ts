import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal-delete-product',
  templateUrl: './modal-delete-product.component.html',
  styleUrls: ['./modal-delete-product.component.css']
})
export class ModalDeleteProductComponent implements OnInit {
  
  @ViewChild('closeDeleteProductModalBtn', {static: true}) closeDeleteProductModalBtn: ElementRef;
  @Input() productSelected: Product;
  @Output() productDeleted = new EventEmitter<Product>();
  
  isDeletting: boolean = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  deleteProduct() {
    this.isDeletting = true;
    this.productsService.deleteProduct(this.productSelected.id).subscribe(
      () => this.productDeleted.emit(this.productSelected),
      (error) => console.log(error),
      () => {
        this.isDeletting = false;
        this.closeDeleteProductModalBtn.nativeElement.click();
      }
    )
  }
}
