import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError,tap } from "rxjs";
import { throwError } from "rxjs";
import { environment } from "../../environments/environment.prod";

import { User } from "./user.component";
import { DataStorageService } from "../shared/data-storage.service";
export interface AuthResponse{
    idToken: string,
    email:string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?:string
}
@Injectable({ providedIn: 'root' })
export class AuthService{
    
    // user= new Subject<User>();
    user = new BehaviorSubject<User>(null);
    tokenExpirationTimer: any;

    constructor(private http: HttpClient, private route:Router, private cloudService:DataStorageService) { }
    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseAPIKey, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            catchError(this.handleError),
            tap(
                (response) => {

                     this.HandleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn);
                    
                }
            )
        );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseAPIKey, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            catchError(this.handleError),
            tap(
                (response) => {

                     this.HandleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn);
                    
                }
            )
        );
    }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate:string
        } = JSON.parse(localStorage.getItem('userData'));
        const loadUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadUser.Token) { 
            const tokenExpireTime = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(tokenExpireTime);
            this.user.next(loadUser);
            
         }
        
    }

    logout() {
        this.user.next(null);
        this.route.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expireTime: number) {
        console.log(expireTime);
       this.tokenExpirationTimer= setTimeout(() => {
            this.logout();
        }, expireTime);
    }

    private HandleAuthentication(email: string, Id: string,token:string, expiresIn: number) {
        const expireDate = new Date(new Date().getTime()+expiresIn*1000);
        const newUser = new User(email, Id, token, expireDate);
        this.user.next(newUser);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(newUser));
    }
    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        } else {
            switch (errorRes.error.error.message) {
                case 'INVALID_LOGIN_CREDENTIALS':
                    errorMessage = 'Email or Password Incorrect!'
                    break;
                    case 'EMAIL_EXISTS':
                    errorMessage = 'Email Already Exists!'
                        break;
            }
            return throwError(errorMessage);
        }
        
    }
}