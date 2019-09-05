import { Component, OnInit } from '@angular/core';

import { HttpEventType, HttpResponse } from '@angular/common/http'
import { FileService } from '../../../../services/file.service';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent implements OnInit {

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



  FileSubmit() {
    const formData: any = new FormData();
    const file: File = this.fileToUpload;
    formData.append("uploads", file[0]['name']);
    formData.append("uploads", file[0]);
    console.log(formData);
    this._fileServ.addFile(formData).subscribe(

      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          const percentDone = Math.round(100 * event.loaded / event.total);
          console.log(`file is ${percentDone}% uploaded`);
          this.uploadPercent = percentDone;
        } else if (event instanceof HttpResponse) {
          console.log('file is completely uploaded!');
          this.showfileuploaded = 'block';
          setTimeout(() => { this.showfileuploaded = "none"; this.uploadPercent = 0; }, 1000)
        }
        console.log(event);
      },
      (err) => {
        console.log(err);

      },
      () => {
        console.log("done");
        this.getFiles();
      }
    )
  }




  downloadTheFile = function (filename) {
    window.open('http://localhost:8000/' + filename);

  }

  deleteTheFile = function (filename) {
    this._fileServ.deleteFile(filename).subscribe(
      (file) => {
        console.log(file);
        if (file["ok"] == 1) {
          for (let i = 0; i < this.files.length; i++) {
            if (this.files[i]["filename"] == filename) {
              this.files.splice(i, 1);
            }
          }
        }
      }

    )
  }


}
