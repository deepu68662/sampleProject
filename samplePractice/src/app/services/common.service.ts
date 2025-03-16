import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { client, employee } from '../model/interface/employee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http:HttpClient) { }

  getAllEmployees():Observable<employee>{
    return this.http.get<employee>(environment.API_URL +"GetAllEmployee");
  }

  getAllClients():Observable<client>{
    return this.http.get<client>(environment.API_URL + "GetAllClients");
  }

  addUpdateClient(obj:client):Observable<client>{
    return this.http.post<client>(environment.API_URL + "AddUpdateClient",obj)
  }

  deleteClientByID(id:number):any{
    return this.http.delete(environment.API_URL + "DeleteClientByClientId?clientId="+id)
  }
}
