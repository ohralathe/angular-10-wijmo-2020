import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {}

  onclick() {
    window.open('./static/view.html', '_blank');
  }
}
