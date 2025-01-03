import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  yearsWithMultipleWinners = [];
  studiosWithWinners = [];
  displayedStudios = [];
  showAllStudios = false;
  producersWithWinnerIntervals = {
    min: [],
    max: [],
  };
  moviesWithWinners = [] as any;
  searchYear: string = '';
  number_year: number = 0;
  isLoading: boolean = false;
  hasSearched: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadYearsWithMultipleWinners();
    this.loadStudiosWithWinners();
    this.loadProducersWithWinnerIntervals();
  }

  loadYearsWithMultipleWinners(): void {
    this.movieService.get_years_with_multiple_winners().subscribe(
      (data) => {
        this.yearsWithMultipleWinners = data.years;
      },
      (error) => {
        console.error('Error loading years with multiple winners', error);
      }
    );
  }

  loadStudiosWithWinners(): void {
    this.movieService.get_studios_with_winners().subscribe(
      (data) => {
        this.studiosWithWinners = data.studios;
        this.updateDisplayedStudios();
      },
      (error) => {
        console.error('Error loading studios with winners', error);
      }
    );
  }

  updateDisplayedStudios(): void {
    if (this.showAllStudios) {
      this.displayedStudios = this.studiosWithWinners;
    } else {
      this.displayedStudios = this.studiosWithWinners.slice(0, 3);
    }
  }

  toggleShowAll(): void {
    this.showAllStudios = !this.showAllStudios;
    this.updateDisplayedStudios();
  }

  loadProducersWithWinnerIntervals(): void {
    this.movieService.get_producers_with_winner_intervals().subscribe(
      (data) => {
        this.producersWithWinnerIntervals = data;
      },
      (error) => {
        console.error('Error loading producers with win ranges', error);
      }
    );
  }

  increaseYear(): void {
    this.number_year = parseInt(this.searchYear, 10);
    this.searchYear += 1;
  }

  decreaseYear(): void {
    this.number_year = parseInt(this.searchYear, 10);
    if (this.number_year > 1980) {
      this.number_year -= 1;
    }
  }

  searchMoviesByYear(): void {
    this.isLoading = true;
    this.hasSearched = true;
    this.number_year = parseInt(this.searchYear, 10);
    if (this.number_year) {
      this.movieService
        .get_movies_with_winners(this.number_year)
        .subscribe((data: any[]) => {
          this.moviesWithWinners = data;
          this.isLoading = false;
        });
    }
  }
}
