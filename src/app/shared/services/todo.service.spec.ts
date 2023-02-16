import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoService } from './todo.service';



fdescribe('TodoService', () => {
  let service: TodoService;

  const httpStub = {
    get: (_params: any) => of([
      {
      "userId": 1,
      "id": 1,
      "title": 'delectus aut autem',
      "completed": false
      }]
    )
  } 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        }
      ]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

