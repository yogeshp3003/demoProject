import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  loader :any;
  constructor(private service :ApiService) {   }

  ngOnInit(): void {
    this.service.loader.subscribe((res:any)=>{ this.loader = res ;})
  }

}
