import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-modal-client',
  templateUrl: './modal-client.component.html',
  styleUrls: ['./modal-client.component.css']
})
export class ModalClientComponent implements OnInit, OnChanges {

  @ViewChild('closeClientModalBtn', {static: true}) closeClientModalBtn: ElementRef;
  @Input() clientSelected: Client;
  @Input() modalType: 'ADD'|'EDIT';
  @Output() modalTypeChange = new EventEmitter<'ADD'|'EDIT'>();
  @Output() clientCreated = new EventEmitter<Client>();
  @Output() clientUpdated = new EventEmitter<Client>();
  
  isSendingData: boolean = false;
  isErrorResponse: boolean = false;

  title: string = '';
  saveButtonText: string = '';

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    console.log()
  }

  ngOnChanges() {
    if (this.modalType === 'EDIT') {
      this.title = 'Actualizar usuario';
      this.saveButtonText = 'Actualizar';
    }
    if (this.modalType === 'ADD') {
      this.title = 'Añadir usuario';
      this.saveButtonText = 'Añadir';
    }
  }
  
  closeModal() {
    setTimeout(() => {
      this.modalTypeChange.emit('EDIT');
    }, 500);
  }

  saveClient() {
    this.isSendingData = true;
    if (this.modalType === 'EDIT') {
      this.clientsService.updateClient(this.clientSelected).subscribe(
        (clientUpdated: Client) => {
          this.clientUpdated.emit(clientUpdated);
          this.closeClientModalBtn.nativeElement.click();
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
      this.clientsService.saveClient(this.clientSelected).subscribe(
        (clientCreated: Client) => {
          this.clientCreated.emit(clientCreated);
          this.closeClientModalBtn.nativeElement.click();
        },
        () => {
          this.isErrorResponse= true;
          this.isSendingData = false;
        },
        () => {
          debugger
          this.isSendingData = false;
        }
      )
    }
  }

}
