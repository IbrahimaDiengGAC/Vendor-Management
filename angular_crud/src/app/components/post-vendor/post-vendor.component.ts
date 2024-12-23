import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-post-vendor',
  templateUrl: './post-vendor.component.html',
  styleUrls: ['./post-vendor.component.css']
})
export class PostVendorComponent {
   postVendorForm! : FormGroup;
  
    constructor(
      private vendorService: VendorService,
      private fb: FormBuilder,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.postVendorForm = this.fb.group({
        name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        phone: [null, [Validators.required]],
      });
    }
  
    onSubmit() {
      console.log(this.postVendorForm);
      this.vendorService.addVendor(this.postVendorForm.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/home']);
      })
    }
}
