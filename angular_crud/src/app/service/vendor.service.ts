import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = 'http://localhost:8082';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) {}
 
   addVendor(vendor: any): Observable<any> {
     return this.http.post(BASIC_URL + '/api/addVendor', vendor);
   }
 
   updateVendor(id: number, vendor: any): Observable<any> {
     return this.http.put(BASIC_URL + '/api/updateVendor/' + id , vendor);
   }
 
   findAllVendors(): Observable<any> {
     return this.http.get(BASIC_URL + '/api/allVendors');
   }
 
   findVendor(id: number): Observable<any> {
     return this.http.get(BASIC_URL + '/api/findVendor/' + id);
   }
 
   deleteVendor(id: number): Observable<any> {
     return this.http.delete(BASIC_URL + '/api/deleteVendor/' + id);
   }
 
}
