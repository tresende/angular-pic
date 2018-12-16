import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  photos = [];
  
  ngOnInit(): void {
    this.photoService.listFormUser('flavio')
      .subscribe(photos => this.photos = photos)
  }
}
