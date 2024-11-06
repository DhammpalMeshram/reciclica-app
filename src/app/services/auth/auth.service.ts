import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/modal/User';

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

  login(userData: { email: string; password: string }): Observable<{ message: string; user: User }> {
    return new Observable<{ message: string; user: User }>((observer) => {
      setTimeout(() => {
        if (userData.email === 'error@gmail.com') {
          observer.error({ message: "Email not found" });
        } else {
          const user: User = { 
            id: 11,
            name: 'User name',
            email: userData.email
          };

          // Save user to localStorage as 'reclicaUser'
          localStorage.setItem('reclicaUser', JSON.stringify(user));
  
          observer.next({ message: "Login successful", user });  // Include both message and user
          observer.complete();
        }
      }, 3000);
    });
  }
  
}
