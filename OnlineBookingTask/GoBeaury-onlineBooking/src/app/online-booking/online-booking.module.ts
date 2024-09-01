import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoBeautyARComponent } from './go-beauty-ar/go-beauty-ar.component';
import { GoBeautyENComponent } from './go-beauty-en/go-beauty-en.component';

const routes:Routes=[
{path:'',redirectTo:'AR',pathMatch:'full'},
{path:'AR',component:GoBeautyARComponent},
{path:'EN',component:GoBeautyENComponent}
]

@NgModule({
  declarations: [GoBeautyARComponent,GoBeautyENComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[RouterModule,GoBeautyARComponent,GoBeautyENComponent]
})
export class OnlineBookingModule { }
