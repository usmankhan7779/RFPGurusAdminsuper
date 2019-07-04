import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import swal from 'sweetalert2';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isequal;
  login: FormGroup;
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }
  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(form, field),
      'has-feedback': this.isFieldValid(form, field)
    };
  }
  model: any = {};
  token ; 
  // JSON.parse(localStorage.getItem('currentUser')).token;
  constructor(private home : HomeService ,  private _nav: Router, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
    // this.adminrole();
  }
  user;
  onLogin() {
   
      this.isequal = true;
    
          this.home.login(this.model.username, this.model.password).subscribe(
            datasss => {
              
              console.log(datasss['token'])
              this.home.checkrole().subscribe(data => {
                console.log(data['status'])
                if(data['status'] = 200){
                  swal.fire({
                    type: 'success',
                    title: 'You have successfully logged into RFPGurus',
                    showConfirmButton: false,
                    timer: 1500, width: '512px',
                  });
                  this._nav.navigate(['dashboard'])
                }else if (data['status'] = 400)
                {
                  swal.fire({
                    type: 'error',
                    title: 'Your Username and Password Does not match! Please Try again ',
                    showConfirmButton: true,
                    timer: 1500, width: '512px',
                  });
                }
                // console.log(data['msg'])
                
                
          });
              
            },
           
        
        error => {
          if (error.status == 400) {
            swal.fire(
              'Error',
              'You are not super admin',
              'error'
            )
          }
          else if (error.status == 500) {
            // this.captcha.resetImg();
            swal.fire(
              'Error',
              'User does not exist',
              'error'
            )
          }
        }
      );
      // this.adminrole();
    }
  //   adminrole() {
  //     this.home.checkrole().subscribe(data => {
       
  //       console.log(this.token)
  //       this.token = data;
  //       console.log(this.token);
  //       // console.log(this.getwtachid.wish_id)
  
  // });
  //   }
    
  }
  // validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(field => {
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     }
  //   });
  // }

