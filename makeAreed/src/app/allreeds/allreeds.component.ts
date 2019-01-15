import { Component, OnInit, Input } from '@angular/core';
import { ReedService } from '../services/reed';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Reed from '../models/reed';

@Component({
  selector: 'app-allreeds',
  templateUrl: './allreeds.component.html',
  styleUrls: ['./allreeds.component.scss']
})
export class AllreedsComponent implements OnInit {

  constructor(private reedService: ReedService) { }

  reedsList: any = [];
  editReeds: any = [];


  ngOnInit() {
    this.reedService.getReeds()
      .subscribe(reeds => {
        //assign the Userlist property to the proper http response
        this.reedsList = reeds
        console.log(reeds)
      })

  }

  deleteReed(reed: Reed) {
    this.reedService.deleteReed(reed._id).subscribe(res => {
      this.reedsList.splice(this.reedsList.indexOf(reed), 1);
    })
  }

}
