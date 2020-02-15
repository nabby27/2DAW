import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LineOrder } from 'src/app/interfaces/line-order';
import { LinesOrderService } from 'src/app/services/lines-order.service';

@Component({
  selector: 'app-modal-delete-line-of-order',
  templateUrl: './modal-delete-line-of-order.component.html',
  styleUrls: ['./modal-delete-line-of-order.component.css']
})
export class ModalDeleteLineOfOrderComponent implements OnInit {
  
  @ViewChild('closeDeleteLineOfOrderModalBtn', {static: true}) closeDeleteLineOfOrderModalBtn: ElementRef;
  @Input() lineOfOrderSelected: LineOrder;
  @Output() lineOfOrderDeleted = new EventEmitter<LineOrder>();
  
  isDeletting: boolean = false;

  constructor(private linesOrderService: LinesOrderService) { }

  ngOnInit() {
  }

  deleteLineOfOrder() {
    this.isDeletting = true;
    this.linesOrderService.deleteLineOfOrder(this.lineOfOrderSelected.orderId, this.lineOfOrderSelected.lineId).subscribe(
      () => this.lineOfOrderDeleted.emit(this.lineOfOrderSelected),
      (error) => console.log(error),
      () => {
        this.isDeletting = false;
        this.closeDeleteLineOfOrderModalBtn.nativeElement.click();
      }
    )
  }
}
