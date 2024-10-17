//app.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'frontEnd';
    testMessage: any;
    constructor(private apiService: ApiService) { };
    ngOnInit() {
        this.apiService.getTestMessage().subscribe(data => {
            this.testMessage = data;
        });
    }
}
