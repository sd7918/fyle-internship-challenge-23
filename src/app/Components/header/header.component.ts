import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userData: any;
  username: string = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    
  }

  getUserData() {
    if (this.username.trim() !== '') {
      this.apiService.getUser(this.username).subscribe(
        (response: any) => {
          console.log(response);
          this.userData = response;
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      console.log('Username cannot be empty');
    }
  }
}
