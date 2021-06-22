import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  uId: string;
  userPost: any ;
  allUser: any;

  constructor(
    private service: ApiService,
    private loaderservice: LoaderService,
    private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.uId = this.route.snapshot.params.uid;
    this.getAllList(this.uId);
  }


  getAllList(uId) {
    this.loaderservice.loader_show();
    this.service.allList.subscribe((res)=>{
      res.forEach((value,index)=>{
        if(value.id==uId){
          this.userPost = res[index]
          this.loaderservice.loader_hide();
        }
      });
    }) 
  }

}
