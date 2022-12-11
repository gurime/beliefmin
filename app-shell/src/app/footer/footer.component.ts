import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar/navbar.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  gotoabout(){
    this.router.navigate(["/About"])
  }
  constructor(private router: Router,public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show()
  }

}
