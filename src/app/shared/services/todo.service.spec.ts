import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoService } from './todo.service';


describe('TodoService', () => {
  let service: TodoService;
  let http: HttpClient;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  });
    service = TestBed.inject(TodoService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('ele deve chamar um GET com o edpoint correto', () =>   {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getTodos();
    expect(spy).toHaveBeenCalledWith('${this.API}');
  })
  
});

