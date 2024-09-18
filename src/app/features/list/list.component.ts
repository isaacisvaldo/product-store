import { HttpClient } from '@angular/common/http';  
import { Component, inject, OnInit } from '@angular/core';  
import { MatTableModule } from '@angular/material/table';  

export interface Produto {  
  id: number;  
  nome: string;  
  descricao: string;  
  preco: number;  
  categorias: string[];  
  estoque: number;  
  imagem: string;  
}  

@Component({  
  selector: 'app-list',  
  standalone: true,  
  imports: [MatTableModule],  
  templateUrl: './list.component.html',  
  styleUrls: ['./list.component.scss']  
})  
export class ListComponent implements OnInit {  
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'estoque', 'imagem'];  
  products: Produto[] = [];  
  httpClient = inject(HttpClient);  

  ngOnInit(): void {  
    this.httpClient.get<Produto[]>('/api/produts').subscribe((products) => {  
      this.products = products;  
    });  
  }  
}