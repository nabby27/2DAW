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
  errorPasswordMatch: boolean = false;

  title: string = '';
  saveButtonText: string = '';

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.errorPasswordMatch = false;
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
      this.isErrorResponse = false;
      this.modalTypeChange.emit('EDIT');
    }, 500);
  }

  saveClient() {
    if (this.modalType === 'EDIT') {
      this.isSendingData = true;
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
      if (this.clientSelected.password_verify === this.clientSelected.password) {
        this.isSendingData = true;
        this.clientsService.saveClient(this.clientSelected).subscribe(
          (clientCreated: Client) => {
            if (clientCreated.dni === '') {
              this.isErrorResponse= true;
              this.isSendingData = false;
            } else {
              this.clientCreated.emit(clientCreated);
              this.closeClientModalBtn.nativeElement.click();
            }
          },
          () => {},
          () => {
            this.isSendingData = false;
          }
        )
      } else {
        this.errorPasswordMatch = true;
      }
    }
  }

}
