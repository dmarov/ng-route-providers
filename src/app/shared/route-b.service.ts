import { Injectable } from '@angular/core';
import { RouteService } from './route.service';

export class RouteBService extends RouteService {

  constructor() {
    super();
  }

  getName() {
    return 'Service B';
  }
}
