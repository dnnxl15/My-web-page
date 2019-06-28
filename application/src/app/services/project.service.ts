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

    saveProject(project: Project): Observable<any>
    {
        let params = JSON.stringify(project);
        console.log(project.category);
        console.log(project.language);

        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._hhtp.post(this.url+'save-project', params, {headers:headers});

    }
}