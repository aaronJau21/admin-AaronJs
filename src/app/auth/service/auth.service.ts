import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ILoginUser, IRequestLoginUser } from '../interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  login(request: IRequestLoginUser): Observable<ILoginUser> {
    const url = `${this.apiUrl}/auth/login`;

    return this.http
      .post<ILoginUser>(url, request)
      .pipe(tap((response) => this.saveLocal(response)));
  }

  saveLocal(data: ILoginUser) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
}
