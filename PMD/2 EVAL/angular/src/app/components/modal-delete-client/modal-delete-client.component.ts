import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-modal-delete-client',
  templateUrl: './modal-delete-client.component.html',
  styleUrls: ['./modal-delete-client.component.css']
})
export class ModalDeleteClientComponent implements OnInit {
  
  @ViewChild('closeDeleteClientModalBtn', {static: true}) closeDeleteClientModalBtn: ElementRef;
  @Input() clientSelected: Client;
  @Output() clientDeleted = new EventEmitter<Client>();
  
  isDeletting: boolean = false;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
  }

  deleteClient() {
    this.isDeletting = true;
    this.clientsService.deleteClient(this.clientSelected.dni).subscribe(
      () => this.clientDeleted.emit(this.clientSelected),
      (error) => console.log(error),
      () => {
        this.isDeletting = false;
        this.closeDeleteClientModalBtn.nativeElement.click();
      }
    )
  }
}
