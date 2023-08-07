import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './shared/section/section.component';
import { AbilityComponent } from './ability/ability.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';

import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { InputsModule } from "@progress/kendo-angular-inputs";

import { CardAction } from "@progress/kendo-angular-layout";
import { CardComponent } from './shared/card/card.component';
import { PopupComponent } from './shared/popup/popup.component';
import { PopupModule } from "@progress/kendo-angular-popup";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SectionComponent,
    AbilityComponent,
    MenuComponent,
    CardComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {
        path: "",
        component: AppComponent,
      },
    ]),
    CommonModule,
    LayoutModule,
    InputsModule,
    PopupModule,
    ButtonsModule,
    MatIconModule,
  ],
  providers: [CardAction],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
