import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../tv.service';
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css'],
})
export class TvDetailsComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  selectedmovie: any;
  //Dependency Injection
  constructor(private route: ActivatedRoute, private movieServ: TvService) {}
  //lifecycle function
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.movieServ.getMovieById(id).subscribe({
      next: (response) => {
        console.log(response);
        this.selectedmovie = response;
      },
    });
  }
}
