import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent {

  projectForm:FormGroup = new FormGroup({
    clientProjectId : new FormControl(""),
    projectName : new FormControl(""),
    startDate : new FormControl(""),
    expectedEndDate : new FormControl(""),
    leadByEmpId : new FormControl(""),
    completedDate : new FormControl(""),
    contactPerson : new FormControl(""),

    contactPersonContactNo : new FormControl(""),
    totalEmpWorking : new FormControl(""),
    projectCost : new FormControl(""),
    projectDetails : new FormControl(""),

    contactPersonEmailId : new FormControl(""),
    clientId : new FormControl(""),

  })
}
