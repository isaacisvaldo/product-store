import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Produto } from '../../shared/interface/products.interface';
import { ProductsService } from '../../shared/services/products.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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