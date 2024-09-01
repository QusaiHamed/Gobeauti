import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'OnlineBooking',pathMatch:'full'},
  {path:'OnlineBooking',loadChildren:()=>import("../../src/app/online-booking/online-booking.module").then(m=>m.OnlineBookingModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
