import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  loader :any;
  constructor(private loaderService : LoaderService) {   }

  ngOnInit(): void {
    this.loaderService.loader.subscribe((res:any)=>{ this.loader = res ;})
  }

}
