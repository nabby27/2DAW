import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent implements OnInit, OnChanges {

  @ViewChild('closeOrderModalBtn', {static: true}) closeOrderModalBtn: ElementRef;
  @Input() orderSelected: Order;
  @Input() modalType: 'ADD'|'EDIT';
  @Output() modalTypeChange = new EventEmitter<'ADD'|'EDIT'>();
  @Output() orderCreated = new EventEmitter<Order>();
  @Output() orderUpdated = new EventEmitter<Order>();
  
  isSendingData: boolean = false;
  isErrorResponse: boolean = false;

  title: string = '';
  saveButtonText: string = '';

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.modalType === 'EDIT') {
      this.title = 'Actualizar pedido';
      this.saveButtonText = 'Actualizar';
    }
    if (this.modalType === 'ADD') {
      this.title = 'Añadir pedido';
      this.saveButtonText = 'Añadir';
    }
  }
  
  closeModal() {
    setTimeout(() => {
      this.isErrorResponse = false;
      this.modalTypeChange.emit('EDIT');
    }, 500);
  }

  saveOrder() {
    this.isSendingData = true;
    if (this.modalType === 'EDIT') {
      this.ordersService.updateOrder(this.orderSelected).subscribe(
        (orderUpdated: Order) => {
          this.orderUpdated.emit(orderUpdated);
          this.closeOrderModalBtn.nativeElement.click();
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
      this.ordersService.saveOrder(this.orderSelected).subscribe(
        (orderCreated: Order) => {
          this.orderCreated.emit(orderCreated);
          this.closeOrderModalBtn.nativeElement.click();
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
