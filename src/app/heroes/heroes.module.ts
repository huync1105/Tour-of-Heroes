import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HomeComponent } from './home/home.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import {ButtonModule} from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroesComponent,
    HomeComponent,
    DashboardComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    HeroesComponent,
    HomeComponent,
  ]
})
export class HeroesModule { }
