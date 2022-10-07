import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../services/tcnewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private techService: TcnewsapiService) { }

  topTechData : any = [];

  ngOnInit(): void {
    this.techService.techHeadlines().subscribe((result)=>{
      this.topTechData = result.articles;
    })
  }

}
