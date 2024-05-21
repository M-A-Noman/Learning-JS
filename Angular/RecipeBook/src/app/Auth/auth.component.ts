import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthResponse, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent{
    isLoginMode = true;
    isLoading = false;
    
    error: string = null;
    constructor(private authService:AuthService,private router: Router){}

    onSwitch() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form: NgForm) {
        // console.log(form.value)
        if (!form.valid) return;
        this.isLoading = true;
        let authObs: Observable<AuthResponse>;
        let email = form.value.email;
        let password = form.value.password;
        if (this.isLoginMode) { 
            authObs = this.authService.login(email, password);
            
        }
        else {  
            authObs=this.authService.signUp(email, password)
        }
        authObs.subscribe(
            (response) => {
                console.log(response);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
                
            },
            (errorMessage) => {
                console.log(errorMessage);
                this.isLoading = false;
                this.error = errorMessage;
            }
        )
        form.reset()
    }
}