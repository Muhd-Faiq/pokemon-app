import { Component,OnInit } from '@angular/core';
import { Ability } from 'src/models/ability.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { PokemonMappingService } from '@services/implementations/pokemon-api.service';
import { takeUntil } from 'rxjs';


@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit{
  public gridView: any;
  public isShowPopup: boolean = false;
  public ability:any;
  public effectDefinition:any;
  

  constructor(
    private pokemonMappingService: PokemonMappingService,
  ){

  }

  ngOnInit() {
    this.pokemonMappingService.getAbility(null)
      .pipe()
      .subscribe(data => {
          this.gridView = data.results;
      });
  }

  getAbility(url: string){
    
    const inputString = url;
    const segments = inputString.split('/');
    const extractedValue = segments[segments.length - 2];
    console.log(url); 
    console.log(extractedValue); 

    this.pokemonMappingService.getAbility(extractedValue)
      .pipe()
      .subscribe(data => {
          this.ability = data;
          console.log(data);
          this.isShowPopup = this.isShowPopup? false:true;

          for (const entry of this.ability.effect_entries) {
            if (entry.language.name === 'en') {
                this.effectDefinition = entry;
                break; // Exit the loop since we found the desired entry
            }
          }

          console.log(this.effectDefinition);
      });
  }

  closePopUp(){
    this.isShowPopup = this.isShowPopup? false:true;
  }
}


