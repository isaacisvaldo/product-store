import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produto } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient);  

 getAll(){
 return this.httpClient.get<Produto[]>('/api/produts') 
 }
}
