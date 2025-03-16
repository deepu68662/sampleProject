import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { employee } from '../../model/interface/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  http = inject(CommonService);
  allEmployees:any;
  isLoader:boolean = true;
  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees(){
        this.http.getAllEmployees().subscribe((res:employee)=>{
        this.allEmployees = res.data;
        this.isLoader = false;
        
    },error=>{
        alert("API failure");
    })
  }

}
