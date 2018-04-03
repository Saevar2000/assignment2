import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MissionService } from '../services/mission.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-send-mission',
  templateUrl: './send-mission.component.html',
  styleUrls: ['./send-mission.component.scss']
})
export class SendMissionComponent implements OnInit {

  Threat: string;
  Details: string;
  Status: string;
  mission: Mission;

  constructor(
    private authService: AuthService, 
    private missionService: MissionService
  ) { }

  ngOnInit() {
    this.Status = "Pending";
  }

  addMission(): void {
    this.mission = {Threat: this.Threat, Detail: this.Details, Status: this.Status};
    this.missionService.missions.push(this.mission);
    this.Threat = '';
    this.Details = '';
    this.Status = "Pending";
  }

}
