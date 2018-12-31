import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;
    comments$: Observable<PhotoComment[]>;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(id);
        this.comments$ = this.photoService.getComments(id);
    }
}