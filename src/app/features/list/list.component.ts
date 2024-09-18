import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products :any[]=[]
 httpClient = inject(HttpClient)

 ngOnInit(): void {
  this.httpClient.get<any>('/api/store').subscribe((products)=>{
 this.products =products.produts
  })

 }
}
