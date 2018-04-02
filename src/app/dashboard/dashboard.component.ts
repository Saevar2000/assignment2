import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../../models/mission';
import { MISSIONS } from '../../mock-data/mock-missions';
import { MissionService } from '../services/mission.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  missions: Mission[];

  constructor(
    private missionService: MissionService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.missions = this.missionService.missions;
  }
}
