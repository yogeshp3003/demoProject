import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allList : any;

  constructor( private service : ApiService) { }

  ngOnInit(): void {
    this.getAllList();
  }

  getAllList(){
    this.service.getAllList().subscribe(
      (res)=>{
        this.allList = res.data
        console.log(this.allList)
      }
    )
  }

}
