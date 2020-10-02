import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  categories;
  constructor(private catalogueServices:CatalogueService){

  }

  ngOnInit(): void {
    this.getCategories(); 
  }

  getCategories() {
    this.catalogueServices.getRessource("/categories")
    .subscribe(categories=> this.categories=categories)
  }
  
}
