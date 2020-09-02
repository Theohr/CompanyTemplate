import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private Router: Router,) {}
goto()
{
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify([{jobid: 'Giannis',test:'Theo',compant:'Citrus'},{jobid: 'Giannis',test:'Theo',compant:'Citrus'}])
      
    }
  };
  this.Router.navigate(['/software-development-page'], navigationExtras);
}
}
