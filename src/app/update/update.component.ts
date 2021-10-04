import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { RestServiceService } from '../rest-service.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  alert: boolean = false

  editRest = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })
  constructor(private router: ActivatedRoute, private rest: RestServiceService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.rest.getCurrentRest(this.router.snapshot.params.id).subscribe((result) => {
      console.warn(result)
      this.editRest = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        address: new FormControl(),
      })
    })
  }
  collection() {
    console.warn('Item', this.editRest.value)
    this.rest.updateRest(this.router.snapshot.params.id, this.editRest.value).subscribe((result) => {
      console.warn("Result ", result)
      this.alert = true
    })
  }
  closeAlert() {
    this.alert = false
  }
}
