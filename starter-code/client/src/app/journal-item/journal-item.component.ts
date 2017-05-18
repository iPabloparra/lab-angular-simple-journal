import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../journal.service'

@Component({
  selector: 'app-journal-item',
  templateUrl: './journal-item.component.html',
  styleUrls: ['./journal-item.component.css']
})
export class JournalItemComponent implements OnInit {
  item;
  constructor(private journalService: JournalService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .subscribe( id => {
        this.journalService.getItem(id)
        .subscribe((journal) => {
          this.item = journal
          console.log(this.item)
        })

      })
  };
}
