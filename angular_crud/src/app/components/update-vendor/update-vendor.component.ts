import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent {
   updateVendorForm! : FormGroup;
  
    id : number = this.activatedRoute.snapshot.params["id"];
  
    constructor(
      private vendorService: VendorService,
      private activatedRoute: ActivatedRoute,
      private fb: FormBuilder,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.updateVendorForm = this.fb.group({
        name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        phone: [null, [Validators.required]],
      });
  
      this.findCustomer();
    }
  
    findCustomer() {
      this.vendorService.findVendor(this.id).subscribe(
        (res) => {
          console.log(res)
          this.updateVendorForm.patchValue(res);
        }
      )
    }
  
    onSubmit() {
      this.vendorService.updateVendor(this.id, this.updateVendorForm.value)
        .subscribe((res) => {
          console.log(res)
          this.router.navigate(["/home"]);
        })
    }
  

}
