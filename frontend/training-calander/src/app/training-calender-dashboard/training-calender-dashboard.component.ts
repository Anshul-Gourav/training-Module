import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';



@Component({
  selector: 'app-training-calender-dashboard',
  templateUrl: './training-calender-dashboard.component.html',
  styleUrls: ['./training-calender-dashboard.component.css']
})
export class TrainingCalenderDashboardComponent implements OnInit {
  trainingObj:any = {};
  constructor(private userService: UserService, public router:Router, public navigateroute:Router) { }

  ngOnInit(): void {
    this.userService.getData()
      .subscribe(res => {
        this.trainingObj = res;
        console.log(this.trainingObj)
      })
  }

delete(id: string){
  this.userService.delete(id).subscribe(
    ()=>{
      alert("record deleted");
      this.router.navigate(['/admin/']);
      window.location.reload();
    }
  )



}
// updateEntry(value:any,id:string){
//   let body={
//     trainingName: value.trainingName,
//     // month:value.month,
//     date:value.date,
//     trainerName:value.trainerName,
//     category:value.category,
//     targetAudience:value.targetAudience,
//     totalNominations:value.totalNominations,
//     present:value.present,
//     absent:value.absent
// }
// this.userService.updateEntry(body,id).subscribe(res =>{
//   console.log(res);
  
// })
// }

}
