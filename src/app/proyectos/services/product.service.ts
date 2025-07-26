import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IGetProject } from '../interfaces/get-projects.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getProduct():Observable<IGetProject[]> {
    return this.http.get<IGetProject[]>(`${this.baseUrl}/proyects`);
  }
}
