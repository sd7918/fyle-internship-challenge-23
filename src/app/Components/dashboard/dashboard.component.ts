import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  repoList:any;
  constructor(private apiService:ApiService){}
  ngOnInit(){
    this.getRepoData("sd7918");
  }
  
  getRepoData(username:string){
    this.apiService.getRepos(username).subscribe((response:any)=>{
      this.repoList = response;
      console.log(response);
    },
    (error:any)=>{
      console.log(error);
    });
  }
  
  
  

}
