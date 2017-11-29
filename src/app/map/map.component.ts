import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  lat = 53.640552;
  long  = -1.857861;
  zoom = 12;

  constructor() { }

  ngOnInit() {
  }

}
