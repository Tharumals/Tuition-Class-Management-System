import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl1 = 'http://localhost:8000/requests/request';
const apiUrl2 = 'http://localhost:8000/userLogs/userLog';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getRequests(): Observable<any> {
    return this.http.get(apiUrl1, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getRequest(id: string): Observable<any> {
    const url = `${apiUrl1}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postRequest(data): Observable<any> {
    return this.http.post(apiUrl1, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRequest(data): Observable<any> {
    return this.http.put(apiUrl1, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteRequest(id: string): Observable<{}> {
    const url = `${apiUrl1}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }




  getLogIns(): Observable<any> {
    return this.http.get(apiUrl2, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getLogIn(id: string): Observable<any> {
    const url = `${apiUrl2}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


postLogIn(data): Observable < any > {
  return this.http.post(apiUrl2, data, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}
}