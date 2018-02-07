import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { StaticPagesService } from '../../services/static-pages.service';


@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.css']
})
export class StaticPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sp: StaticPagesService
  ) { }

  id:number;
  article:any;

  ngOnInit() {
    //takes the id from the route params and assigns it to id variable
    this.id = this.route.snapshot.params['id'];

    //gets the article from the database and assigns it to the article variable
    this.sp.getArticle(this.id).subscribe(data => {
      this.article = data;
    })

  }


}
