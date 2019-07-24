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
  hide;
  login: FormGroup;
  foremail;
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
  status;
  onLogin() {
   
      this.isequal = true;
    
          this.home.login(this.model.username, this.model.password).subscribe(
            datasss => {
              
              console.log(datasss['token'])
              this.home.checkrole().subscribe(data => {
                console.log(data.json())
                this.status= data.json()['msg']
                console.log(this.status)
                // status: false
                // alert(this.status)
                if(this.status == "Super User" ){
                  // alert(this.status)
                  this._nav.navigate(['/dashboard'])
                  swal({
                    type: 'success',
                    title: 'You have successfully logged into RFPGurus',
                    showConfirmButton: false,
                    timer: 1500, width: '512px',
                  });
                  
                }else if (this.status == "You are Not Super Admin Userr")
                {
                  // alert(this.status)
                  swal({
                    type: 'error',
                    title: 'Your Username and Password Does not match! Please Try again ',
                    showConfirmButton: true,
                    timer: 1500, width: '512px',
                  });
                }
                // console.log(data['msg'])
                
                
          });
              
            }
      );
     
    }
}