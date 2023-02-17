import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

import { By } from '@angular/platform-browser'

fdescribe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(()=> {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have title from todo input', () =>{
    component.todo = { ...component.todo, title:
    'novo titulo'};
    fixture.detectChanges();
    const elementTitle = fixture.debugElement.query(By.css('#title'))
      expect((elementTitle.nativeElement as HTMLSpanElement).textContent).
    toContain('novo titulo')
  });
});
