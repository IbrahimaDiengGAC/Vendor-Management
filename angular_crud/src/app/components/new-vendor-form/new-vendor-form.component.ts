import { Country } from '@angular-material-extensions/select-country';
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-vendor-form',
  templateUrl: './new-vendor-form.component.html',
  styleUrls: ['./new-vendor-form.component.css']
})
export class NewVendorFormComponent {


  onCountrySelected(country: Country) {
    console.log(country);
  }
}
