import { Injectable } from '@angular/core';
import { User } from './user.model';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User={
  trainingName:"", 
  
  date:0,
  trainerName:"",
  category:"",
  targetAudience:"",
  totalNominations:100,
  present:0,
  absent:0,
}
  constructor(private http:HttpClient) { }
  newTraining(data:any) :Observable<any>{
    return this.http.post(environment.apiUrl+"newTraining", data)
  }
  getData() :Observable<any>{
    return this.http.get(environment.apiUrl+"allEntries")
  }
  delete(id:String):Observable<any>{
    return this.http.delete(environment.apiUrl+"delete/"+id)
  }
  updateEntry(data:any, id:String):Observable<any>{
    return this.http.put(environment.apiUrl+"update/"+id, data)
  }

}
