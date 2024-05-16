import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true }) signupForm: NgForm;
  defaultSecretQuestion='teacher' 
  Answer = '';
  genders = ['male', 'female', 'others']
  
  user={
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender:''
  
  }
  isSubmitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
    // we can use signupForm.setValue() method instead but one downside of that method it will overwrite existing value of the from as it takes exact same type of object as our form
    // one more thing to remember patchValue can be access used by form component of the ngForm template
  }
  // onSubmit(form:NgForm) {
  //   console.log(form);
  // }
  
  // we can use viewChild method instead of passing the form object form html
  onSubmit() {
    // console.log(this.signupForm);
    this.isSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
