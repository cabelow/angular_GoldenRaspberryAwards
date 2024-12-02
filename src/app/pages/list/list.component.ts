import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies: any[] = [];
  displayedColumns: string[] = ['title', 'year', 'producer', 'studio', 'winner'];
  pageSize: number = 10;
  currentPage: number = 0;
  totalElements: number = 0;
  totalPages: number = 0;
  winnerFilter: string = 'default';
  yearFilter: string = '';
  pageNumbers: number[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  updatePageNumbers(): void {
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page - 1;
      this.getMovies();
    }
  }

  getMovies(): void {
    this.movieService.getMovies(this.winnerFilter, this.yearFilter, this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        console.log('Movies data:', data);
        this.movies = data.content;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.updatePageNumbers();
      },
      error: (error) => {
        console.error('Failed to fetch movies:', error);
      }
    });
  }

  applyFilters(): void {
    this.currentPage = 0;
    this.getMovies();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getMovies();
  }

  goToFirstPage(): void {
    this.currentPage = 0;
    this.getMovies();
  }

  goToLastPage(): void {
    this.currentPage = this.totalPages - 1;
    this.getMovies();
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getMovies();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.getMovies();
    }
  }

}