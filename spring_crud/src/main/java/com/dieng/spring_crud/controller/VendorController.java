package com.dieng.spring_crud.controller;

import com.dieng.spring_crud.entity.Vendor;
import com.dieng.spring_crud.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class VendorController {
    private final VendorService vendorService;

    @Autowired
    public VendorController(VendorService vendorService) {
        this.vendorService = vendorService;
    }

    @PostMapping("/addVendor")
    public ResponseEntity<Vendor> addVendor(@RequestBody Vendor vendor){
        Vendor newVendor = vendorService.addVendor(vendor);
        return new ResponseEntity<>(newVendor, HttpStatus.CREATED);
    }

    @PutMapping("/updateVendor/{id}")
    public ResponseEntity<Vendor> updateVendor(@PathVariable("id") Long id, @RequestBody Vendor vendor){
        Vendor existingVendor = vendorService.findVendorById(id);
        if (existingVendor == null)
            return ResponseEntity.notFound().build();
        existingVendor.setName(vendor.getName());
        existingVendor.setEmail(vendor.getEmail());
        existingVendor.setPhone(vendor.getPhone());

        Vendor updatedVendor = vendorService.updateVendor(existingVendor);
        return ResponseEntity.ok(updatedVendor);
    }

    @GetMapping("/allVendors")
    public ResponseEntity<List<Vendor>> findAllVendors(){
        List<Vendor> vendors = vendorService.findAllVendor();
        return ResponseEntity.ok(vendors);
    }

    @GetMapping("/findVendor/{id}")
    public ResponseEntity<Vendor> findVendorById(@PathVariable("id") Long id){
        Vendor vendor = vendorService.findVendorById(id);
        return ResponseEntity.ok(vendor);
    }

    @DeleteMapping("/deleteVendor/{id}")
    public ResponseEntity<?> deleteVendorById(@PathVariable("id") Long id){
        vendorService.deleteVendorById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
