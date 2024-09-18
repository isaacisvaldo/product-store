import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Produto } from '../../shared/interface/products.interface';
import { ProductsService } from '../../shared/services/products.service';


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
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

}