import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CategoryInterface[]> {
    return this.http.get<any[]>(`${this.url}`).pipe(
      map((response: any[]): CategoryInterface[] => {
        return response.map((r) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          imageUrl: r.imageUrl,
        }));
      }),
    );
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
