import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service'

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {
  journals: Array<any>;

  constructor(private journal: JournalService) { }
//en ngOnInit meto lo primero que quiero que cargue...
  ngOnInit() {
    this.journal.getList()
      .subscribe((journals) => {
        this.journals = journals
        console.log(this.journals)
      })
  }
}
