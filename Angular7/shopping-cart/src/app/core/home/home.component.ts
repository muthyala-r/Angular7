import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   products$;
  constructor(public productService:ProductService) {
    this.products$ = productService.getAllProducts();
    console.log(this.products$);
   }

  ngOnInit() {
  }

}
