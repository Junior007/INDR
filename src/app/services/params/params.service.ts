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
      return this.http.get<Param[]>('Params');
      // .pipe(map((data: any[]) => data.map((item: any) => new Value(item.id, item.name))));
    }

    deleteParams(param: Param): any {
      return this.http.post('params/delete', param);
    }

    updateParams(param: Param): any {
      return this.http.post('params/update', param);
    }
    createParams(param: Param): Observable<Param> {
      return this.http.post<Param>('params/create', param);
    }

  }
