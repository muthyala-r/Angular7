import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(public categoryService :CategoryService,
              public productService : ProductService,
              private router : Router) {
   this.categories$ = this.categoryService.getCategories();
  }

  ngOnInit() {
  }

onSave(product){
  this.productService.saveProduct(product);
  this.router.navigate(['/']);
  console.log(product);
}
}
