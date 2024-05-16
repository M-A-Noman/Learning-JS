import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent implements OnInit{
  projectForm: FormGroup;
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required,
        // this.forbiddenName  
      ],this.asyncForbiddenName
      
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus':new FormControl("Finished")
    })
  }
  onSubmit() {
    console.log("Project name:", this.projectForm.get('projectName').value);
    console.log("Email:", this.projectForm.get('email').value);
    console.log('Status:', this.projectForm.get('projectStatus').value);
  }
  forbiddenName(control: FormControl): { [s: string]: boolean }{
    if (control.value === 'Test') {
      return { 'invalidName': true };
    } return null;
  }
  asyncForbiddenName(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout(() => {
        if (control.value == 'Test') { resolve({ 'invalidName': true }); }
        else resolve(null);
      }, 1500);
    });
    return promise;
  }
}
