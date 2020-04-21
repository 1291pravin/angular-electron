import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  bottomtabs = ["Mosaic", "Classic TWS", "Portfolio View", "Markets"];
  bottomtabs_index = 3;
  @Output() onTabClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('model', {static:true}) model : ElementRef;
  tabname = "";


  changeTab(key) {
    this.bottomtabs_index = key;
    this.onTabClicked.emit(key);
  }

  addTab() {
    if (!this.tabname) {
      alert("please enter tabname");
      return;
    }
    this.bottomtabs.push(this.tabname);
    this.tabname  = "";
    this.closeModal();
  }

  openModal() {
    this.model.nativeElement.style.display = "block";
  }

  closeModal() {
    this.model.nativeElement.style.display = "none";
  }




  constructor() { }

  ngOnInit(): void {
  }

}
