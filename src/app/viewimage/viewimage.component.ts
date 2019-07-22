 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from "sweetalert2";
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.scss']
})
export class ViewimageComponent implements OnInit {
  personal :any;
  duration;
  item;
  package;
  price;
  filetoup;
  veiwvalue;
  fileName;
  model;
  store = "https://storage.rfpgurus.com/final/";
  constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService , private home: HomeService ,  private http: HttpClient,) { }
  ngOnInit() {
    this.viewuser()
  }
  viewuser(){
    
    
    this._serv.get_price_img().subscribe(
      data => {
          this.personal = data.json();
          // console.log(this.personal);
       

  //  console.log(this.personal.free_trial)
          // console.log(this.personal)
          
      });
  }
  handleFileInput(files: FileList) {
    this. filetoup = files;
    // console.log('uploaded filetoup  ', this.filetoup);
  
  this.fileName=  this.filetoup[0].name;
  // this.new = this.filetoup[0].name;
  // console.log('File Name is:' ,this.fileName);
  // this.onSubmit();
  }
  handleFileInput2(files: FileList) {
    this. filetoup = files;
    // console.log('uploaded filetoup  ', this.filetoup);
  
  // this.fileName=  this.filetoup[0].name;
  this.new = this.filetoup[0].name;
  console.log('File Name is:' ,this.fileName);
  // this.onSubmit();
  }
  new;
  thumbnail;
  // onSubmit() {

  //   this.http.post('https://storage.rfpgurus.com/hamzatest.php', this.input, { responseType: 'text' }).subscribe(data => {
  //       if (data === "Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.,.") {
  //         // this.sweetalertupload();
  //       }
  //       else {
  //         this.fileName = data;
  //         console.log(this.fileName);
         
  //         // this.ifImageUpload(this.sell_days);

  //       }
  //     });
  //     this.imagesuppload(this.fileName);
  // }
  course_image;
  onSubmit() {
    this.http.post(
      'https://storage.rfpgurus.com/hamzatest.php',
      this.input, { responseType: 'text' }).subscribe(data => {
        if (data === "Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.Sorry, your file was not uploaded.") {
          // EditCourseDialogComponent.ImageUploadFailer();
        } else {
          this.course_image = data;
          console.log(this.course_image);
          this.imagesuppload();

        }

      });

    // }
  }
  onSubmitmonthly() {
    this.http.post(
      'https://storage.rfpgurus.com/hamzatest.php',
      this.input, { responseType: 'text' }).subscribe(data => {
        if (data === "Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.Sorry, your file was not uploaded.") {
          // EditCourseDialogComponent.ImageUploadFailer();
        } else {
          this.monthly_image = data;
          console.log(this.monthly_image);
          this.imagesuppload2();

        }

      });

    // }
  }
  yearly_image;
  onSubmityear() {
    this.http.post(
      'https://storage.rfpgurus.com/hamzatest.php',
      this.input, { responseType: 'text' }).subscribe(data => {
        if (data === "Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.Sorry, your file was not uploaded.") {
          // EditCourseDialogComponent.ImageUploadFailer();
        } else {
          this.yearly_image = data;
          console.log(this.yearly_image);
          this.imagesuppload3();

        }

      });

    // }
  }
  onChange(event: EventTarget) {
    this.input = new FormData();
    const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    this.input.append('fileToUpload', target.files[0]);
    console.log(this.input)

  }
  monthly_image;
  imagesuppload(){
    this.home.postimg(this.course_image).subscribe( data => {
      swal.fire({
        type: 'success',
        title:
          'Update free trial image ',
        width: '512px',
      })
    })
  }
  imagesuppload2(){
    this.home.postimgmonthly(this.monthly_image).subscribe( data => {
      swal.fire({
        type: 'success',
        title:
          'Update monthly plan image',
        width: '512px',
      })
    })
  }
  imagesuppload3(){
    this.home.postimgyear(this.yearly_image).subscribe( data => {
      swal.fire({
        type: 'success',
        title:
          'Update yearly plan image',
        width: '512px',
      })
    })
  }
  input;
  files;
  file;
  ImgSrc;
  base64textString;
  _handleReaderLoaded(readerEvt) {
    // console.log('base64');
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(this.base64textString);
  }

}
