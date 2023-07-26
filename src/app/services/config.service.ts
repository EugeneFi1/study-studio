import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  public getConfig(): Observable<Config> {
    return this.http.get<Config>("http://localhost:3000/config");
  }
}
