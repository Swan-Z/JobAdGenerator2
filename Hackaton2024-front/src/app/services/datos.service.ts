import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  listItems: string[] = ['One', 'Two', 'Three', 'Four'];

  constructor() { }

  getItems(): string[] {
    return this.listItems;
  }

  getItem(i: number): string { return this.listItems[i]; }
}
