import { Component, OnInit } from '@angular/core';
import { Mission } from '../../models/mission';
import { MISSIONS } from '../../mock-data/mock-missions';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private missionService: MissionService) { }

  ngOnInit() {
    
  }

}
