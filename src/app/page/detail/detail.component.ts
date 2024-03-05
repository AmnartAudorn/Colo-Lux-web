import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SessionCookieUtil } from 'src/app/shared/utils/session-cookie.util';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  terms2!: FormGroup;
  terms3!: FormGroup;
  terms4!: FormGroup;
  terms5!: FormGroup;
  terms6!: FormGroup;
  terms7!: FormGroup;
  terms8!: FormGroup;
  terms9!: FormGroup;
  terms10!: FormGroup;
  personal_step = false;

  lowRisk = 'Low Risk';
  initialRisk = 'Initial Risk';
  mediumRisk = 'Medium Risk';
  highRisk = 'High Risk';
  risk ='';

  address_step = false;
  education_step = false;
  public sumpercen = 0;
  step = 1;
  
  constructor(private formBuilder: FormBuilder,
     public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService) {}
  ngOnInit() {
    this.click();

    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.terms2 = this.formBuilder.group({
      terms2: ['', Validators.required],
    });
    this.terms3 = this.formBuilder.group({
      terms3: ['', Validators.required],
    });
    this.terms4 = this.formBuilder.group({
      terms4: ['', Validators.required],
    });
    this.terms5 = this.formBuilder.group({
      terms5: ['', Validators.required],
    });
    this.terms6 = this.formBuilder.group({
      terms6: ['', Validators.required],
    });
    this.terms7 = this.formBuilder.group({
      terms7: ['', Validators.required],
    });
    this.terms8 = this.formBuilder.group({
      terms8: ['', Validators.required],
    });
    this.terms9 = this.formBuilder.group({
      terms9: ['', Validators.required],
    });
    this.terms10 = this.formBuilder.group({
      terms10: ['', Validators.required],
    });
    this.educationalDetails = this.formBuilder.group({
      highest_qualification: ['', Validators.required],
      university: ['', Validators.required],
      total_marks: ['', Validators.required],
    });
  }
  get personal() {
    return this.personalDetails.controls;
  }
  get education() {
    return this.educationalDetails.controls;
  }
  get address() {
    return this.addressDetails.controls;
  }
  next() {

    
    if (this.step == 1) {
      // this.personal_step = true;
      console.log("step 1");
      if (this.personalDetails.invalid) {
        return;
      }
    }

    if (this.step == 2) {
      console.log("step 2");
      if (this.terms2.invalid) {
        return;
      }
    }

    if (this.step == 3) {
      if (this.terms3.invalid) {
        return;
      }
      
      if(this.terms3.controls['terms3'].value == 'YES'){
        this.sumpercen += 6.5;
      }else{
        this.sumpercen += 0;
      }
    }

    if (this.step == 4) {
      if (this.terms4.invalid) {
        return;
      }
       
      if(this.terms4.controls['terms4'].value == 'YES'){
        this.sumpercen += 6.5;
      }else{
        this.sumpercen += 0;
      }
    }

    if (this.step == 5) {
      if (this.terms5.invalid) {
        return;
      }
      if(this.terms5.controls['terms5'].value == 'YES'){
        this.sumpercen += 6.5;
      }else{
        this.sumpercen += 0;
      }
    }

    if (this.step == 6) {
      if (this.terms6.invalid) {
        return;
      }
      if(this.terms6.controls['terms6'].value === 'YES'){
        this.sumpercen += 6.5;
      }else{
        this.sumpercen += 0;
      }
    }

    if (this.step == 7) {
      if (this.terms7.invalid) {
        return;
      }
      if(this.terms7.controls['terms7'].value === 'YES'){
        this.sumpercen += 6.5;
      }else{
        this.sumpercen += 0;
      }
    }

    if (this.step == 8) {
      if (this.terms8.invalid) {
        return;
      }
      if(this.terms8.controls['terms8'].value === 'YES'){
        this.sumpercen += 6.5;
      }else{
        this.sumpercen += 0;
      }
    }

    if (this.step == 9) {
      if (this.terms9.invalid) {
        return;
      }
      if(this.terms9.controls['terms9'].value === 'YES'){
        this.sumpercen += 6.5;
      }else{
        this.sumpercen += 0;
      }

    }

    if (this.step == 10) {
      if (this.terms10.invalid) {
        return;
      }
      if(this.terms10.controls['terms10'].value === 'YES'){
        this.sumpercen += 6.5;
      }else{
        this.sumpercen += 0;
      }

     
    }
    

      this.step++;
      if(this.step == 11){
        if(this.sumpercen >= 45){
          this.risk = this.highRisk;
        }else if(this.sumpercen <= 44 || this.sumpercen >= 22){
          this.risk = this.mediumRisk;
        }else if(this.sumpercen <= 21 || this.sumpercen >= 1){
          this.risk = this.initialRisk;
        }else{
          this.risk = this.lowRisk;
        }
  
  
        const body = {
          name : this.personalDetails.controls['name'].value,
          email: this.personalDetails.controls['email'].value,
          phone: this.personalDetails.controls['phone'].value,
          risk : this.risk,
          score : this.sumpercen,
          terms : this.terms2.controls['terms2'].value

        }
  
        this._authService.createAssessment(body).subscribe(() => {
          console.log(body);
        });
      }
    console.log(this.sumpercen);
  }
  previous() {
    this.step--;
    if (this.step == 3) {
      if (this.terms3.invalid) {
        return;
      }
      
      if(this.terms3.controls['terms3'].value == 'YES'){
        this.sumpercen -= 6.5;
      }else{
        this.sumpercen -= 0;
      }
    }

    if (this.step == 4) {
      if (this.terms4.invalid) {
        return;
      }
       
      if(this.terms4.controls['terms4'].value == 'YES'){
        this.sumpercen -= 6.5;
      }else{
        this.sumpercen -= 0;
      }
    }

    if (this.step == 5) {
      if (this.terms5.invalid) {
        return;
      }
      if(this.terms5.controls['terms5'].value == 'YES'){
        this.sumpercen -= 6.5;
      }else{
        this.sumpercen -= 0;
      }
    }

    if (this.step == 6) {
      if (this.terms6.invalid) {
        return;
      }
      if(this.terms6.controls['terms6'].value === 'YES'){
        this.sumpercen -= 6.5;
      }else{
        this.sumpercen -= 0;
      }
    }

    if (this.step == 7) {
      if (this.terms7.invalid) {
        return;
      }
      if(this.terms7.controls['terms7'].value === 'YES'){
        this.sumpercen -= 6.5;
      }else{
        this.sumpercen -= 0;
      }
    }

    if (this.step == 8) {
      if (this.terms8.invalid) {
        return;
      }
      if(this.terms8.controls['terms8'].value === 'YES'){
        this.sumpercen -= 6.5;
      }else{
        this.sumpercen -= 0;
      }
    }

    if (this.step == 9) {
      if (this.terms9.invalid) {
        return;
      }
      if(this.terms9.controls['terms9'].value === 'YES'){
        this.sumpercen -= 6.5;
      }else{
        this.sumpercen -= 0;
      }
    }
  }
  public click() {
    const body = {
      "sumHome": 0,
      "sumContact": 0,
      "sumAbout": 0,
      "sumRick": 1,
      "sumFacebook": 0,
      "sumLine": 0,
      "sumWechat": 0
  }

    this._authService.click(body).subscribe(() => { });

}


 
}