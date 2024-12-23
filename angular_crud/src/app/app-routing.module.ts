import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './components/vendors/vendors.component';
import { PostVendorComponent } from './components/post-vendor/post-vendor.component';
import { UpdateVendorComponent } from './components/update-vendor/update-vendor.component';

const routes: Routes = [
  {path: "customer", component: PostVendorComponent},
  {path: "home", component: VendorsComponent},
  {path: "findCustomer/:id", component: UpdateVendorComponent},


  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'home' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
