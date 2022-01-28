import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-aus-kyc',
  templateUrl: './aus-kyc.component.html',
  styleUrls: ['./aus-kyc.component.scss'],
})
export class AusKycComponent implements OnInit {
  constructor() {}
  urllink: any = 'https://source.unsplash.com/user/erondu/48x48';
  selectedFiles(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urllink = event.target.result;
      };
    }
  }
  ngOnInit(): void {}
  addField = {
    previous: false,
  };
}
