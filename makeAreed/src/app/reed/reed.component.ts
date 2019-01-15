import { Response } from '@angular/http';
import { ReedService } from '../services/reed';
import Reed from '../models/reed';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reed',
  templateUrl: './reed.component.html',
  styleUrls: ['./reed.component.scss']
})
export class ReedComponent implements OnInit {

  

  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private reedService: ReedService
  ) { }

  public newReed: Reed = new Reed()
  

  //An Empty list for the visible todo list
  reedsList: Reed[];
  editReeds: Reed[] = [];

  ngOnInit(): void {

    //At component initialization the 
    this.reedService.getReeds()
      .subscribe(reeds => {
        //assign the todolist property to the proper http response
        this.reedsList = reeds
        console.log(reeds)
      })
  }

  create() {
    this.reedService.createReed(this.newReed)
      .subscribe((res) => {
        this.reedsList.push(res.data)
        this.newReed = new Reed()
      })
  }


  editReed(reed: Reed) {
    console.log(reed)
     if(this.reedsList.includes(reed)){
      if(!this.editReeds.includes(reed)){
        this.editReeds.push(reed)
      }else{
        this.editReeds.splice(this.editReeds.indexOf(reed), 1)
        this.reedService.editReed(reed).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
            // this.editTodo(todo)
            console.error('Update Unsuccesful')
          })
        }
      }
    }
  
    // THIS IS WHAT I NEEDED FOR MY PROJECT, mental note.
    // doneReed(reed:Reed){
    //   reed.status = 'Done'
    //   this.reedService.editReed(reed).subscribe(res => {
    //     console.log('Update Succesful')
    //   }, err => {
    //     // this.editTodo(todo)
    //     console.error('Update Unsuccesful')
    //   })
    // }

    submitReed(event, reed:Reed){
      if(event.keyCode ==13){
        this.editReed(reed)
      }
    }

    deleteReed(reed: Reed) {
      this.reedService.deleteReed(reed._id).subscribe(res => {
        this.reedsList.splice(this.reedsList.indexOf(reed), 1);
      })
    }

}



