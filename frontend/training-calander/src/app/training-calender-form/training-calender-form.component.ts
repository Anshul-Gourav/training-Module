import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-training-calender-form',
  templateUrl: './training-calender-form.component.html',
  styleUrls: ['./training-calender-form.component.css']
})
export class TrainingCalenderFormComponent  {

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router: Router ,public userService:UserService) { }

  trainingCalenderForm!:FormGroup;
  Months:any =["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "  Nov", "Dec"] ;
  Categories :any=["Knowledge bytes", "session", "workshop", "hakathon", "event"]
  



  ngOnInit(): void {
   this.trainingCalenderForm = this.fb.group({ 
           trainingName:['',[Validators.required]], 
          //  month:['', [Validators.required]],
           date:[0,[Validators.required]],
           trainerName:['',[Validators.required]],
           category:['',[Validators.required]],
           targetAudience:['',[Validators.required]],
           totalNominations:[0],
           present:[0],
           absent:[0] 
  
    });
  }
 
  get f(){
    return this.trainingCalenderForm.controls;
  }

 
submitData(value:any){
  let body={
    trainingName: value.trainingName,
    // month:value.month,
    date:value.date,
    trainerName:value.trainerName,
    category:value.category,
    targetAudience:value.targetAudience,
    totalNominations:value.totalNominations,
    present:value.present,
    absent:value.absent
}

this.userService.newTraining(body).subscribe(response=>{
  console.log(response);
  
})
}


}
