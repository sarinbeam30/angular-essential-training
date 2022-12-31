import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;
  
  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('Sarin Wanichwasin XXX', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }

    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;

    if (year >= minYear && year <= maxYear) {
      console.log(33)
      
      return null;
    } else {
      console.log(36)

      return {
        year: {
          min: minYear,
          max: maxYear
        }
      }
    }
  }

  onSubmit (mediaItem: any) {
    console.log(typeof(mediaItem), mediaItem);
    console.log(mediaItem.value);
    console.log(mediaItem.valid);
  }
}
