import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

interface user {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  post: any[];
}

class userObj implements user {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  post: any[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public allUser: user[];

  constructor(
    private service: ApiService,
    private router: Router) {
    this.service.loader_show();
  }

  ngOnInit(): void {
    // this.service.getAllList();
    this.getAllList()
  }

  getAllList() {
    this.service.loader_hide();
    // this.allList = this.service.allUser; 
    this.service.getAllList().subscribe((res) => {
      // this.allUser = res.data 
      // console.log(this.allUser) 
      if (res.data !== undefined) {
        const items = res.data;
        const data: user[] = [];

        if (items.length > 0) {
          this.allUser = [];
          for (const item of items) {
            const cData: user = new userObj();
            cData.id = item.id;
            cData.title = item.title;
            cData.firstName = item.firstName;
            cData.lastName = item.lastName;
            cData.email = item.email;
            cData.picture = item.picture;
            data.push(cData);
          }
          this.allUser = data;
          console.log(this.allUser)
        }
      }
    });
  }

}
