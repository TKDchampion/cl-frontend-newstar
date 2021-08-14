import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { ModalService } from "../modal/modal.services";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  constructor(
    public messageService: MessageService,
    private modalService: ModalService
  ) {}

  ngOnInit() {}

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  confirm(id: string) {
    this.messageService.clear();
    this.closeModal(id);
  }
}
