import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { ModalService } from "./modal.services";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() title!: string;
  private element;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error("modal must have an id");
      return;
    }
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = "block";
  }

  close(): void {
    this.element.style.display = "none";
  }
}
