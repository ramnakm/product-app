import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { name: '', price: 0 };
  apiUrl = 'https://localhost:7264/api/products';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<Product[]>(this.apiUrl).subscribe(data => this.products = data);
  }

  addProduct() {
    if (!this.newProduct.name || this.newProduct.price <= 0) return;
    this.http.post<Product>(this.apiUrl, this.newProduct).subscribe(() => {
      this.newProduct = { name: '', price: 0 };
      this.loadProducts();
    });
  }

  updateProduct(product: Product) {
    this.http.put(`${this.apiUrl}/${product.id}`, product).subscribe(() => this.loadProducts());
  }

  deleteProduct(id?: number) {
    console.log(id)
    if (!id) return;
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.loadProducts());
  }

}
