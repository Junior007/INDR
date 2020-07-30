import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Param } from '../../models/param';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {


  constructor(private http: HttpClient) {
  }
      //
    getParams(): Observable<Param[]> {
      return this.http.get<Param[]>('params');
      // .pipe(map((data: any[]) => data.map((item: any) => new Value(item.id, item.name))));
    }

    deleteParams(param: Param) {
      debugger;
      let url ='params/delete/' + param.nombre;
      return this.http.post<any>(url, param);
    }

    updateParams(param: Param): Observable<Param> {
      debugger;
      return this.http.post<Param>('params/update', param);
    }
    createParams(param: Param): Observable<Param> {
      debugger;
      return this.http.post<Param>('params/create', param);
    }

  }
