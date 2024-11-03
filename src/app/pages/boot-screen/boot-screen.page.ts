import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boot-screen',
  templateUrl: './boot-screen.page.html',
  styleUrls: ['./boot-screen.page.scss'],
})
export class BootScreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/login'])
    },1000)
  }

}
