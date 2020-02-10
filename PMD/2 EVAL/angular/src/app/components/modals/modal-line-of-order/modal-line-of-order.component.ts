import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { LineOrder } from 'src/app/interfaces/line-order';
import { LinesOrderService } from 'src/app/services/lines-order.service';

@Component({
  selector: 'app-modal-line-of-order',
  templateUrl: './modal-line-of-order.component.html',
  styleUrls: ['./modal-line-of-order.component.css']
})
export class ModalLineOfOrderComponent implements OnInit, OnChanges {

  @ViewChild('closeLineOfOrderModalBtn', {static: true}) closeLineOfOrderModalBtn: ElementRef;
  @Input() lineOfOrderSelected: LineOrder;
  @Input() modalType: 'ADD'|'EDIT';
  @Output() modalTypeChange = new EventEmitter<'ADD'|'EDIT'>();
  @Output() lineOfOrderCreated = new EventEmitter<LineOrder>();
  @Output() lineOfOrderUpdated = new EventEmitter<LineOrder>();
  
  isSendingData: boolean = false;
  isErrorResponse: boolean = false;

  title: string = '';
  saveButtonText: string = '';

  constructor(private lineOfOrdersService: LinesOrderService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.modalType === 'EDIT') {
      this.title = 'Actualizar linea de pedido';
      this.saveButtonText = 'Actualizar';
    }
    if (this.modalType === 'ADD') {
      this.title = 'Añadir linea de pedido';
      this.saveButtonText = 'Añadir';
    }
  }
  
  closeModal() {
    setTimeout(() => {
      this.isErrorResponse = false;
      this.modalTypeChange.emit('EDIT');
    }, 500);
  }

  saveLineOfOrder() {
    this.isSendingData = true;
    if (this.modalType === 'EDIT') {
      this.lineOfOrdersService.updateLineOfOrder(this.lineOfOrderSelected).subscribe(
        (lineOfOrderUpdated: LineOrder) => {
          this.lineOfOrderUpdated.emit(lineOfOrderUpdated);
          this.closeLineOfOrderModalBtn.nativeElement.click();
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
      this.lineOfOrdersService.saveLineOfOrder(this.lineOfOrderSelected).subscribe(
        (lineOfOrderCreated: LineOrder) => {
          this.lineOfOrderCreated.emit(lineOfOrderCreated);
          this.closeLineOfOrderModalBtn.nativeElement.click();
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
