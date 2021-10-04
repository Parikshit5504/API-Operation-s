import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private rest: RestServiceService) { }
  addValues = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })
  ngOnInit(): void {
  }
  collectValues() {
    // console.warn(this.addValues.value);
    this.rest.addData(this.addValues.value).subscribe((i) => {
      console.warn(i)
    })
  }
}