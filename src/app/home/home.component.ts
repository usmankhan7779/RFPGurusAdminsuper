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
  model: any = {}
  constructor(private home : HomeService ,  private _nav: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  onLogin() {
   
      this.isequal = true;
      this.home.login_authenticate(this.login.value.username).subscribe(
        data => {
          this.home.login(this.model.username, this.model.password).subscribe(
            data => {
              swal.fire({
                type: 'success',
                title: 'You have successfully logged into RFPGurus - The largest aggregator of RFPs at the Federal, County, City, State, Agency levels.',
                showConfirmButton: false,
                timer: 1500, width: '512px',
              });

              if (localStorage.getItem('member')) {
                let url = localStorage.getItem('member')
                let last = url.length
                let ur = url.slice(0, 13)
                let state = url.slice(0, 5)
                let category = url.slice(0, 8)
                let agency = url.slice(0, 6)


                if (ur == 'searched-data') { this._nav.navigate([ur], { queryParams: { keyword: url.slice(13, last) } }); }
                else if (state == 'state') {

                  this._nav.navigate([state], { queryParams: { state: url.slice(5, last) } });
                }
                else if (category == 'category') {
                  this._nav.navigate([category], { queryParams: { cat: url.slice(8, last) } });
                }
                else if (agency == 'agency') {

                  this._nav.navigate([agency], { queryParams: { agency: url.slice(6, last) } });
                }
                else if (url == 'advanced-search') {
                  this._nav.navigate([url]);
                }
                else if (url == 'latest-rfps') {
                  this._nav.navigate([url]);
                }
                else {
                  // var val = 'rfp/' + url
                  // this._nav.navigate([val]);
                this._nav.navigate(['rfp/'], { queryParams: { query: url } });
                }
              } else {
                this._nav.navigate(['/']);
              }
              // this._location.back();
            },
           
        
        error => {
          if (error.status == 400) {
            swal.fire(
              'Error',
              'First, verify your email address to signin',
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
    }
    
    
      )}
  
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

