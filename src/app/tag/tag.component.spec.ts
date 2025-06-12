import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
  });

  it('should display the correct number of tags', () => {
    // Arrange: set up some tags
    const tags = ['Angular', 'TypeScript', 'Testing'].map((name) => ({
      name,
      color: 'blue',
    }));
    fixture.componentRef.setInput('tags', tags);
    fixture.detectChanges();

    // Act: query for tag elements (assuming each tag is rendered with a class 'tag-item')
    const tagElements = fixture.debugElement.queryAll(By.css('.tag'));

    // Assert: the number of rendered tags matches the input
    expect(tagElements.length).toBe(tags.length);
  });
});
