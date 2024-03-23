import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [],
})
export class FooterComponent implements OnInit {
  public menu: boolean = false;
  public dateTime: Date;

  @Output() public projectsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public bioChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public contactChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() {
    this.dateTime = new Date();
  }

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.menu = !this.menu;
  }

  public showProjects(): void {
    this.projectsChange.next(true);
  }

  public showBio(): void {
    this.bioChange.next(true);
  }

  public showContact(): void {
    this.contactChange.next(true);
  }
}
