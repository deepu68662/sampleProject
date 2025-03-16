import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { client, employee } from '../../model/interface/employee';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-client',
  imports: [CommonModule,FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
ngOnInit(): void {
  this.getAllClients()
}
http = inject(CommonService);
getClients:any = [];
isLoader = true;
clientObj:any = {};
 
getAllClients(){
     this.http.getAllClients().subscribe((res:client)=>{
          this.getClients = res.data;
          this.isLoader = false;
          
      },error=>{
          alert("API failure");
      })
}

addClient(){
  this.http.addUpdateClient(this.clientObj).subscribe((res:client)=>{
     if(res.data){
      alert("client added successfully");
      this.getAllClients();
      
     }
     else{
          alert(res.message);
          this.clientObj = '';
     }
  })
}

deleteClient(id:number){
  this.http.deleteClientByID(id).subscribe((res:client)=>{
    if(res.result){
     alert("client deleted successfully");
     this.getAllClients();
     this.clientObj = '';
    }
    else{
         alert(res.message);
    }
 })
}

updateClient(data:employee){

    this.clientObj = data; 
    
  
}

}
