import { Component } from '@angular/core';
import {CocktailsService} from '../cocktails/cocktails.service';
import {Router} from '@angular/router';
import {Cocktails} from '../Cocktails';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchData: any;
  search:string;

  constructor(  private cocktailService: CocktailsService, private router: Router) {}

  getData() {
    const container = document.getElementById('container');
    const noData = document.getElementById('noData');
    this.searchData = this.search;
    const searchString:string = this.searchData;

     console.log(this.searchData)
  
    if (searchString.length !== 0) {
    
        this.cocktailService.getCocktailName(searchString)
          .subscribe((result:Cocktails) => {
            this.searchData = result;
            container.style.display = 'block';

            if (this.searchData === null) {
              noData.style.display = 'block';
            }

            if (this.searchData.drinks === null) {
              noData.style.display = 'block';
            } else {

              if (this.searchData.drinks.length > 0) {
                noData.style.display = 'none';
              }
            }
          });
     
    } else if (searchString.length === 0) {
      container.style.display = 'none';
    } else {
      this.searchData = undefined;
      noData.style.display = 'block';
    }
  }
  onClick(parameter) {
  
    this.router.navigate(['drink', parameter]);
   

  }
 
}
