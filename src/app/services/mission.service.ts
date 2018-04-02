import { Injectable } from '@angular/core';
import { Mission } from '../../models/mission';
import { MISSIONS } from '../../mock-data/mock-missions';

@Injectable()
export class MissionService {

  missions: Mission[] = MISSIONS;

  constructor() { }

}
