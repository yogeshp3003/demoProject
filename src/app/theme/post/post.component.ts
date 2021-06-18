import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  uId: string;
  allPost: any;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,) {
    this.service.loader_show();
  }

  ngOnInit(): void {
    this.uId = this.route.snapshot.params.uid;
    this.getAllPost();
  }

  getAllPost() {
    this.service.loader_hide();
    this.service.getAllUserPost(this.uId).subscribe((res) => {
      this.allPost = res.data
      console.log(this.allPost)
    })
  }
}
