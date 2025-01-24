import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import Lego from '../../../../../common/lego'
import { MoreInfoComponent } from '../more-info/more-info.component';
import { NgFor } from '@angular/common';
export interface Lego {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  // image: 
  sets: [string];
}

@Component({
  selector: 'app-entry-page',
  imports: [],
  templateUrl: './entry-page.component.html',
  styleUrl: './entry-page.component.scss'
})
export class EntryPageComponent {
  constructor(private http: HttpClient) {}
  someValue: string = 'Currently we have made no requests to the server';
  lego: Lego = { name: '', color: '', size: '', price: 0, quantity: 0, sets: ['']} as Lego
  legos: Lego[]

  ngOnInit() {
    this.http.get<{message:string}>('/api/home').subscribe((data) => {
      this.someValue = data.message;
    });
    this.getAllLegos();
    
  }

  updateName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.lego.name = target.value;
  }

  updateColor(event: Event) {
    const target = event.target as HTMLInputElement;
    this.lego.color = target.value;
  }

  updateSize(event: Event) {
    const target = event.target as HTMLInputElement;
    this.lego.size = target.value;
  }

  updatePrice(event: Event) {
    const target = event.target as HTMLInputElement;
    this.lego.price = parseInt(target.value);
  }
  
  updateQuantity(event: Event) {
    const target = event.target as HTMLInputElement;
    this.lego.quantity = parseInt(target.value);
  }

  submitForm() {
    console.log('sent')
    this.http.post('http://localhost:8080/home', this.lego).subscribe(() => {
      this.http.get<Lego[]>('http://localhost:8080/home/legos').subscribe((result:Lego[]) => this.legos = result);  

    });
  }

  getAllLegos() {
    this.http.get<Lego[]>('http://localhost:8080/home/legos').subscribe((result:Lego[]) => this.legos = result);
  }
}
