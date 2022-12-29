import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDetailsComponent } from './display-details/display-details.component';
const routes: Routes = [
  {
    path:' ',redirectTo:'/randomuser', pathMatch:'full'
  },
  {
    path:'randomuser',component:DisplayDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
