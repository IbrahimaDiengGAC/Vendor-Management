import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendorsComponent } from './components/vendors/vendors.component';
import { PostVendorComponent } from './components/post-vendor/post-vendor.component';
import { UpdateVendorComponent } from './components/update-vendor/update-vendor.component';
import { NewVendorFormComponent } from './components/new-vendor-form/new-vendor-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    VendorsComponent,
    PostVendorComponent,
    UpdateVendorComponent,
    NewVendorFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectCountryModule.forRoot('en'),
    HttpClientModule,
    NgxCountriesDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
