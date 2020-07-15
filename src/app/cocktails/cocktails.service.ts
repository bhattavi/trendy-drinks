import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
 
  constructor(private http: HttpClient) { }

  getCocktailRandom() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }
 
  getCocktailName(search) {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search);
  }

 
  getCocktailID(id) {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
  }
}
