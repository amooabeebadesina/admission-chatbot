import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {CONSTANTS} from '../utils/constants';

@Injectable()
export class LogService {

  constructor(private http: Http) {

  }

  logMessage(message){
    const data = {'message': message};
    return this.http.post(CONSTANTS.LOG_URL, data);
  }

}
