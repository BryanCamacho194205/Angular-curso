import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/imagenes/banner1.jpg',
    'assets/imagenes/banner2.jpg',
    'assets/imagenes/banner3.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
