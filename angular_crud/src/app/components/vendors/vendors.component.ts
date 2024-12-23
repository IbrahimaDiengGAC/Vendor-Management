import { Component } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {

  customers! : any[];
  
    constructor(private vendorService: VendorService) {}
  
    ngOnInit() {
      this.findAllCustomers();
    }
  
    findAllCustomers() {
      this.vendorService.findAllVendors().subscribe(
        (res) => {
          console.log(res)
          this.customers = res;
        }
      )
    }
  
    deleteCustomer(id: number) {
      this.vendorService.deleteVendor(id).subscribe(
        (res) => {
          console.log(res)
  
          this.findAllCustomers();
        }
      )
    }

}
