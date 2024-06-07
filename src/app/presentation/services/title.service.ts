import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private readonly _title = signal<string>('');

  public get title(): string {
    return this._title();
  }

  public setTitle(title: string) {
    this._title.set(title);
  }
}
