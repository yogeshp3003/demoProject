import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LoaderService } from 'src/app/service/loader.service';

declare var $ ;

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
  model: any = {};
  uId : number;

  constructor(
    private service: ApiService,
    private loaderservice: LoaderService,
    private router : Router,) {
  }

  ngOnInit(): void {
    this.getAllList()
  }

  getAllList() {
    this.loaderservice.loader_show();

    this.service.allList.subscribe((res)=>{
      this.allUser = res;
      this.loaderservice.loader_hide();
    }) 
  }

  deleteUser(uId){
    const res = confirm('Do You Want To Delete ?')
    if(res){
      this.allUser.forEach((value,index)=>{
        if(value.id==uId) this.service.allUser.splice(index,1);     //use filter fun
      });
    }
    this.service.updateObject();
  }

  UpdatedItem(){
    let updateItem = this.service.allUser.find(this.findIndexToUpdate, this.uId);
    let index = this.service.allUser.indexOf(updateItem);          //use de structuring object   ... es6
    this.service.allUser[index].firstName = this.model.firstName;
    this.service.allUser[index].lastName = this.model.lastName;
    this.service.allUser[index].email = this.model.email;
    this.service.updateObject();
    $("#myModal").modal('hide');
  }

  findIndexToUpdate(newItem) { 
    return newItem.id === this;
  }

  modelOpen(item){
    this.uId = item.id ;
    this.model.firstName = item.firstName
    this.model.lastName = item.lastName
    this.model.email = item.email
    $("#myModal").modal('show');
  }

  checkPost(id){
    this.router.navigateByUrl("/post/"+ id);
  }

}
