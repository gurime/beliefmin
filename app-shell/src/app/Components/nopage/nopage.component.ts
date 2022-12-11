import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../navbar/navbar.service';

@Component({
  selector: 'app-nopage',
  templateUrl: './nopage.component.html',
  styleUrls: ['./nopage.component.css']
})
export class NopageComponent implements OnInit {
  gotoHome(){
    this.router.navigate(['/']); 
}
  constructor(private router: Router,public nav: NavbarService) { }

  ngOnInit():void {
    this.nav.hide()
  }

}
