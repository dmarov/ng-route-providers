import { Injectable } from '@angular/core';
import { RouteService } from './route.service';

export class RouteAService extends RouteService {

  constructor() {
    super();
  }

  getName() {
    return 'Service A';
  }
}
