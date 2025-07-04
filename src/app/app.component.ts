import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  imports: [ProductComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-app';
}
