import { DummyComponent } from './../dummy/dummy.component';
import { FooterComponent } from './../footer/footer.component';
import { TradetabsComponent } from './../tradetabs/tradetabs.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ResizableModule } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [HomeComponent,HeaderComponent,TradetabsComponent,FooterComponent,DummyComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule,ResizableModule, AngularSplitModule.forRoot(),ChartsModule]
})
export class HomeModule {}
