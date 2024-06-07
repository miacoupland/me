import { DatePipe } from '@angular/common';
import { Component, OnInit, OutputEmitterRef, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule, DatePipe],
})
export class FooterComponent implements OnInit {
  public menu: boolean = false;
  public dateTime: Date;

  public projectsChange: OutputEmitterRef<boolean> = output<boolean>();
  public bioChange: OutputEmitterRef<boolean> = output<boolean>();
  public contactChange: OutputEmitterRef<boolean> = output<boolean>();


  constructor() {
    this.dateTime = new Date();
  }

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.menu = !this.menu;
  }

  public showProjects(): void {
    this.projectsChange.emit(true);
  }

  public showBio(): void {
    this.bioChange.emit(true);
  }

  public showContact(): void {
    this.contactChange.emit(true);
  }
}
