import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/angular.json', name: 'Angular' },
      { id: 'data/JSON.json', name: 'JSON' },
    ];
  }

}
