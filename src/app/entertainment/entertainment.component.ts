import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../services/tcnewsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private enterS : TcnewsapiService) { }

  entertainmentData : any = [];

  ngOnInit(): void {
    this.enterS.entertainmentHeadlines().subscribe((result)=>{
      this.entertainmentData = result.articles;
    })
  }

}
