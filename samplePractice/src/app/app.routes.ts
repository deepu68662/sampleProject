import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';

export const routes: Routes = [
    {path:"",redirectTo:"HomeComponent",pathMatch:"full"},
    {path:"employee",component:EmployeeComponent},
    {path:"client",component:ClientComponent},
    {path:"clientproject",component:ClientProjectComponent}
];
