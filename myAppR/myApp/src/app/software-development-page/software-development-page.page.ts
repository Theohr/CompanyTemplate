import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-software-development-page',
  templateUrl: './software-development-page.page.html',
  styleUrls: ['./software-development-page.page.scss'],
})
export class SoftwareDevelopmentPagePage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  clientid:any;

  ngOnInit() {
  
    this.route.queryParams.subscribe(params => {
     this.clientid = JSON.parse(params.special);
      console.log( this.clientid.length );
    });
  }

}
