import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:UserserviceService) { }

  ngOnInit(): void {
  }
  submit(login: any){
    console.log("submitted",login);
 
  }

  getuserdetail(){
    this.service.getuser().subscribe((data)=>{
      console.log(data)
    })
     
  } 
  
}
