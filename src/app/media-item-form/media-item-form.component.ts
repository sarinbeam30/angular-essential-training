import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaItemService } from '../media-item.service';
import { lookupListToken } from '../provider';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private mediaItemService: MediaItemService,
    private router: Router,
    @Inject(lookupListToken) public lookupLists ) {}
  
  ngOnInit() {

    // Using a FormGroup
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('Sarin Wanichwasin XXX', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });

    // Using a FormBuilder
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('Sarin Wanichwasin XXX', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator)
    })
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }

    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;

    if (year >= minYear && year <= maxYear) {      
      return null;
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear
        }
      }
    }
  }

  onSubmit (mediaItem: any) {
    this.mediaItemService.add(mediaItem.value)
      .subscribe(() => {
        this.router.navigate(['/', mediaItem.value.medium]);
      });
  }
}
