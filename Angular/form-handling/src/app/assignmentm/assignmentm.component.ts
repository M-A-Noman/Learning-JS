import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignmentm',
  templateUrl: './assignmentm.component.html',
  styleUrl: './assignmentm.component.css'
})
export class AssignmentmComponent {
  @ViewChild('f') assignmentForm: NgForm;
  isSubmitted = false;
  user = {
    email: '',
    password: '',
    subscription:''
  }
  onAssignmentSubmit() {
    console.log(this.assignmentForm);
    this.isSubmitted = true;
    this.user.email = this.assignmentForm.value.email;
    this.user.password = this.assignmentForm.value.password;
    this.user.subscription = this.assignmentForm.value.subscription;
  }
}
