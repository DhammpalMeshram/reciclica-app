import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setNewPassword(userData: { email: string; password: string }): Observable<{ message: string }> {
    return new Observable<{ message: string }>((observer) => {
      setTimeout(() => {
        if (userData.email === 'error@gmail.com') {
          observer.error({ message: "Email not found" });
        } else {
          observer.next({ message: "Password reset successful" });  // send success message
          observer.complete();
        }
      }, 3000);
    });
  }
}
