import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public launch_date: any = [];
  public launch_success: string ;
  public land_success: string ;
  public rocket:any= {};
  constructor(private http: HttpClient, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(){
    this.SpinnerService.show(); 
    this.http.get('https://api.spaceXdata.com/v3/launches?limit=100')
      .subscribe((launch_data) => {
         
          this.launch_date = launch_data;
          this.SpinnerService.hide();  
        
      }, (err) => {
          console.log(err);
    });
  }
  onchangeDate($event){
    this.SpinnerService.show(); 
      this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_year='+$event)
      .subscribe((launch_data) => {
        
          this.launch_date = launch_data;
          this.SpinnerService.hide(); 
      }, (err) => {
          console.log(err);
    }); 
  }

  onLaunchChange($event){
    this.SpinnerService.show(); 
      this.http.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success='+$event)
      .subscribe((launch_data) => {
      console.log($event);
          this.launch_date = launch_data;
          this.SpinnerService.hide(); 
      }, (err) => {
          console.log(err);
    }); 
    
  }
  onLandingChange($event){
    this.SpinnerService.show(); 
      this.http.get('https://api.spacexdata.com/v3/launches?limit=100&land_success='+$event)
      .subscribe((launch_data) => {
        console.log($event);
          this.launch_date = launch_data;
          this.SpinnerService.hide(); 
      }, (err) => {
          console.log(err);
    }); 
  }
}
