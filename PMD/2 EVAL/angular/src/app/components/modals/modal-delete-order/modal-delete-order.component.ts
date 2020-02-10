import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-modal-delete-order',
  templateUrl: './modal-delete-order.component.html',
  styleUrls: ['./modal-delete-order.component.css']
})
export class ModalDeleteOrderComponent implements OnInit {
  
  @ViewChild('closeDeleteOrderModalBtn', {static: true}) closeDeleteOrderModalBtn: ElementRef;
  @Input() orderSelected: Order;
  @Output() orderDeleted = new EventEmitter<Order>();
  
  isDeletting: boolean = false;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

  deleteOrder() {
    this.isDeletting = true;
    this.ordersService.deleteOrder(this.orderSelected.id).subscribe(
      () => this.orderDeleted.emit(this.orderSelected),
      (error) => console.log(error),
      () => {
        this.isDeletting = false;
        this.closeDeleteOrderModalBtn.nativeElement.click();
      }
    )
  }
}
