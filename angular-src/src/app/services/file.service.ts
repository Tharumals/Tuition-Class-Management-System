import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})

export class FileService {

  public FileUrl = 'http://localhost:8000/files/';

  constructor(private http: HttpClient) { }


  getFiles() {
    return this.http.get<Array<object>>(this.FileUrl);
  }

  addFile(file) {
    let req = new HttpRequest('POST', this.FileUrl, file, {
      reportProgress: true
    });
    return this.http.request(req);
  }


  deleteFile(filename) {
    return this.http.delete(this.FileUrl + filename);
  }
  
  

}
