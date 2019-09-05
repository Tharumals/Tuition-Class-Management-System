import { Component, OnInit } from '@angular/core';

import { HttpEventType, HttpResponse } from '@angular/common/http'
import { FileService } from '../../../services/file.service';


@Component({
  selector: 'app-student-downloads',
  templateUrl: './student-downloads.component.html',
  styleUrls: ['./student-downloads.component.css'],
  
})
export class StudentDownloadsComponent implements OnInit {


  uploadPercent: number = 0;
  showfileuploaded = 'none';
  files: Array<object> = [];
  fileToUpload: File;

  constructor(private _fileServ: FileService) { }


  ngOnInit() {
    this.getFiles();
  }


  onChange(x) {
    this.fileToUpload = x.target.files;
  }



  getFiles = function () {
    this._fileServ.getFiles().subscribe(
      data => {
        this.files = data["files"];
        console.log(data);
      },
      err => {
        console.log('file upload error ' + JSON.stringify(err));
      }
    )
  }





  downloadTheFile = function (filename) {
    window.open('http://localhost:8000/' + filename);

  }


}

