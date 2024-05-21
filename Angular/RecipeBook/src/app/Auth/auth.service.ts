import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError,tap } from "rxjs";
import { throwError } from "rxjs";
import { User } from "./user.component";
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
    
    user= new Subject<User>();
    constructor(private http: HttpClient) { }
    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTaZibv8b7lncwo18IrMbJjMjZDVNTnEs', {
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
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTaZibv8b7lncwo18IrMbJjMjZDVNTnEs', {
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
    private HandleAuthentication(email: string, Id: string,token:string, expiresIn: number) {
        const expireDate = new Date(new Date().getTime()+expiresIn*1000);
        const createUser = new User(email, Id, token, expireDate);
        this.user.next(createUser);
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