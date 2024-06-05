import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private readonly _title: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly title$: Observable<string> = this._title.asObservable();

  public get title(): string {
    return this._title.getValue();
  }

  public setTitle(title: string) {
    this._title.next(title);
  }
}
