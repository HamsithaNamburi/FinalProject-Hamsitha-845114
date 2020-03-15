import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import {FormGroup,FormBuilder} from '@angular/forms'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
   
  }

  selectedFile : File = null;

      // constructor(private http: HttpClient) { }

      // ngOnInit() {
      // }


      onFileSelected(event){
        this.selectedFile = <File> event.target.files[0];
      }

      onUpload(){
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:4200/assets', fd)
          .subscribe(res => {
            console.log(res);
          });

      }

}
