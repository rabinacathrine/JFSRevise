import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public users : User=new User();
// name= new FormControl('')
// updateName(){
//   this.name.setValue('abc');
// }
constructor(private fb: FormBuilder,private service:UserserviceService) { }
// profileForm = this.fb.group({
//   username: [''],
//   password: [''],
//   email:['']
  // address: this.fb.group({
  //   street: [''],
  //   city: [''],
  //   state: [''],
  //   zip: ['']
  // }),
// });

// profileForm = new FormGroup({
//   firstname: new FormControl(''),
//   mail: new FormControl(''),
// });

onSubmit(){
  console.warn(this.users)
  this.adduser();
}
adduser(){
  this.service.adduser(this.users).subscribe((data)=>{
    console.log("added");
    console.log(data)
  })
}
  // constructor(private service:UserserviceService) { }

  ngOnInit(): void {
  }

}
