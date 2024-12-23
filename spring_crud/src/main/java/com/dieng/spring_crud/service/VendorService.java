package com.dieng.spring_crud.service;

import com.dieng.spring_crud.Exception.UserNotFoundException;
import com.dieng.spring_crud.entity.Vendor;
import com.dieng.spring_crud.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorService {
    private final VendorRepository vendorRepository;

    @Autowired
    public VendorService(VendorRepository vendorRepository) {
        this.vendorRepository = vendorRepository;
    }

    public Vendor addVendor(Vendor vendor){
        return vendorRepository.save(vendor);
    }

    public List<Vendor> findAllVendor(){
        return vendorRepository.findAll();
    }

    public Vendor findVendorById(Long id){
       return vendorRepository.findById(id)
               .orElseThrow(() -> new UserNotFoundException("User by id :"+id+" not found"));
    }

    public void deleteVendorById(Long id){
        vendorRepository.deleteById(id);
    }

    public Vendor updateVendor(Vendor vendor) {
        return vendorRepository.save(vendor);
    }
}
