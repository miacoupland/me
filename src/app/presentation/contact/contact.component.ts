import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [TranslateModule],
})
export class ContactComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('common.contact');
  }

}
