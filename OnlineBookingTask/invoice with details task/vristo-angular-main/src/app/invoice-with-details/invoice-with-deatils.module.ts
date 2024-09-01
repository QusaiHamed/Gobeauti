import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceWithDetailsComponent } from './invoice-with-details/invoice-with-details.component';
import path from 'path';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { TranslateModule } from '@ngx-translate/core';

const routes:Routes=[
  {path:'Index',component:InvoiceWithDetailsComponent},
  {path:'',redirectTo:'Index',pathMatch:'full'}
]

@NgModule({
  declarations: [InvoiceWithDetailsComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    TranslateModule ,
    ReactiveFormsModule,
    DataTableModule,
    RouterModule.forChild(routes)
  ],
  exports:[InvoiceWithDetailsComponent,RouterModule]
})
export class InvoiceWithDeatilsModule { }
