import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';



@Injectable()

export class AuthenticationService {
    constructor(private http: HttpClient, private notificationService: NotificationService) {
    }

    login(emailId: string, password: string) {

        let url = `${environment.apiUrl}//auth/authenticate`;

        return  this.http.post(url, {emailId: emailId, password: password}).pipe(map(user => {
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.notificationService.pushInitialize();
          }

          return user;
      }));

    }

    logout() {
      localStorage.removeItem('currentUser');
      this.notificationService.pushUnregister();
    }
}