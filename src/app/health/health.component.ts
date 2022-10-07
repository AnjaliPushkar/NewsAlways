import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../services/tcnewsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private heathService: TcnewsapiService ) { }

  topHealthData : any = [];

  ngOnInit(): void {
    this.heathService.healthHeadlines().subscribe((result)=>{
      this.topHealthData = result.articles;
    })
  }

}
