import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://dummyapi.io/data/api/';
  public allUser: user[];
  public allUserPost: any;
  public allList = new BehaviorSubject<user[]>(null);

  constructor(private http: HttpClient) {
    this.getAllList();
  }

  getAllList() {
    return this.http.get<any>(this.baseUrl + 'user?limit=10',
      {
        headers: new HttpHeaders({ 'app-id': `60d1e77fc1774aa733f30ca2` })
      })
      .subscribe((res) => {
        if (res.data !== undefined) {
          const items = res.data;
          const data: user[] = [];

          if (items.length > 0) {
            this.allUser = [];
            for (const item of items) {
              const cData: user = new userObj();
              cData.id = item.id;           //use constructor for assign values
              cData.title = item.title;
              cData.firstName = item.firstName;
              cData.lastName = item.lastName;
              cData.email = item.email;
              cData.picture = item.picture;
              cData.post = item.post;
              data.push(cData);
            }
            this.allUser = data;
            this.updateObject();
            this.getAllUserPost();
          }
        }
      });
  }

  getAllUserPost() {   //promiss all used

    Promise.all(this.allUser).then(values => {
      values.forEach((value, index) => {

        this.http.get<any>(this.baseUrl + 'user/' + value.id + '/post?limit=10',
          {
            headers: new HttpHeaders({ 'app-id': `60d1e77fc1774aa733f30ca2` })
          })
          .subscribe((res) => {
            this.allUser[index].post = res.data;
          });

      });
    });

    this.updateObject();

  }

  updateObject() {
    this.allList.next(this.allUser)
  }
}
