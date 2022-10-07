import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../services/tcnewsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private sportService: TcnewsapiService) { }

  topSportsData : any = [];

  ngOnInit(): void {
    this.sportService.sportsHeadlines().subscribe((result)=>{
      this.topSportsData = result.articles;
    })
  }

}
