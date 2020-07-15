import { Component, OnInit } from '@angular/core';
import {CocktailsService} from '../cocktails/cocktails.service';
import {ActivatedRoute} from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {

    drink:any;
    id:any;
    image:string;
  
    constructor(
        private cocktailService: CocktailsService,
      
        private activatedRoute: ActivatedRoute,
        private tts: TextToSpeech
    ) { 
    
    }
  
    ngOnInit() {
      this.getDrink();
    }
  
    getDrink() {
      this.activatedRoute.paramMap.subscribe(paramMap => {
             this.id = paramMap.get('id');
      });
      console.log(this.id);
      this.cocktailService.getCocktailID(this.id)
          .subscribe((cocktails:any) => {
            this.drink = cocktails.drinks[0];
            this.image = this.drink.strDrinkThumb;
            console.log(this.drink.strDrinkThumb);
           
          });
    }

    textToSpeech(text) {
      this.tts.speak(text)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
    }
  

  }
  