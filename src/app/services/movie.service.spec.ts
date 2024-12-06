import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { environment } from 'src/environment/environment';

fdescribe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  const baseUrl = environment.baseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve years with multiple winners', () => {
    const mockResponse = {
      years: [
        { year: 1986, winnerCount: 2 },
        { year: 1990, winnerCount: 2 },
      ],
    };

    service.get_years_with_multiple_winners().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${baseUrl}movies?projection=years-with-multiple-winners`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
