import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {
  @Input() dataValue: string;
  constructor() { }

  ngOnInit() {
  }

}
