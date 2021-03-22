import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public InData:string;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  SendMessage(){
    this.childEvent.emit("Message from Child")
  }

}
