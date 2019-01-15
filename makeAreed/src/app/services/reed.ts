import Reed from '../models/reed';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';



@Injectable()
export class ReedService {

  api_url = 'http://localhost:3000';
  reedUrl = `${this.api_url}/api/reeds`;

  constructor(private http: HttpClient) {}


  createReed(reed: Reed): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.reedUrl}`, reed);
  }

  getReeds(): Observable<Reed[]>{
    return this.http.get(this.reedUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Reed[];
    }))
  }

  editReed(reed:Reed){
    let editUrl = `${this.reedUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, reed);
  }

  deleteReed(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.reedUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

