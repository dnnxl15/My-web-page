import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private _hhtp: HttpClient
    ){
        this.url = Global.url;
    }

    testService()
    {
        return 'Testing the angular service';
    }
}