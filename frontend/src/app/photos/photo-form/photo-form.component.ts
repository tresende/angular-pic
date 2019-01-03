import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
	selector: 'ap-photo-form',
	templateUrl: './photo-form.component.html',
	styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

	photoForm: FormGroup;
	file: File;
	preview: string;

	constructor(
		private formBuilder: FormBuilder,
		private photoService: PhotoService,
		private alerteService: AlertService,
		private userService: UserService,
		private router: Router
	) { }

	ngOnInit() {
		this.photoForm = this.formBuilder.group({
			file: ['', Validators.required],
			description: ['', Validators.maxLength(300)],
			allowComments: [true],
		});
	}

	upload() {
		const description = this.photoForm.get('description').value;
		const allowComments = this.photoForm.get('allowComments').value;
		this.photoService
			.upload(description, allowComments, this.file)
			.subscribe(() => {
				this.alerteService.success('Upload complete');
				this.router.navigate(['/user', this.userService.getUserName()]);
			});
	}

	handleFile(file: File) {
		this.file = file;
		const fileReader = new FileReader();
		fileReader.onload = (event: any) => this.preview = event.target.result;
		fileReader.readAsDataURL(file);

	}
}
