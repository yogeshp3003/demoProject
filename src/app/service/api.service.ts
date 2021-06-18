import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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
  public loader = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  loader_show() {
    this.loader.next(true);
    return this.loader;
  }

  loader_hide() {
    this.loader.next(false);
    return this.loader;
  }

  getAllList() {
    return this.http.get<any>(this.baseUrl + 'user?limit=10',
      {
        headers: new HttpHeaders({ 'app-id': `60cb3d032a1af53afcc0e96c` })
      })
      // .subscribe((res) => {
      //         // this.allUser = res.data 
      //         // console.log(this.allUser) 
      //   if (res.data !== undefined) {
      //     const items = res.data;
      //     const data: user[] = [];

      //     if (items.length > 0) {
      //       this.allUser = [];
      //       for (const item of items) {
      //         const cData: user = new userObj();
      //         cData.id = item.id;
      //         cData.title = item.title;
      //         cData.firstName = item.firstName;
      //         cData.lastName = item.lastName;
      //         cData.email = item.email;
      //         cData.picture = item.picture;
      //         data.push(cData);
      //       }
      //       this.allUser = data;
      //       console.log(this.allUser)
      //     }
      //   }
      // });
  }

  getAllUserPost(uId) {
    return this.http.get<any>(this.baseUrl + 'user/' + uId + '/post?limit=10',
      {
        headers: new HttpHeaders({ 'app-id': `60cb3d032a1af53afcc0e96c` })
      })
    // .subscribe((res)=>{
    //   this.allUserPost = res.data 
    //   console.log(this.allUserPost) 
    // });
  }
}
