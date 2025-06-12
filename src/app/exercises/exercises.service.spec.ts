import { TestBed } from '@angular/core/testing';
import { Exercise } from './exercises.model';
import { ExercisesService } from './exercises.service';

describe('ExercisesService', () => {
  let service: ExercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExercisesService],
    });
    service = TestBed.inject(ExercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return no tags if no tags are defined', () => {
    const exercise: Exercise = {
      id: '1',
      title: 'Test Exercise',
      description: undefined,
      tags: [],
    };
    const tags = service.tags(exercise);
    expect(tags).toEqual([]);
  });

  it('should return one tag if one tag is defined', () => {
    const exercise: Exercise = {
      id: '1',
      title: 'Test Exercise',
      description: undefined,
      tags: ['tag-1'],
    };
    const tags = service.tags(exercise);
    expect(tags).toEqual([{ name: 'tag-1', color: 'gray' }]);
  });

  it('should return #FF980088 for "testing" tag', () => {
    const exercise: Exercise = {
      id: '1',
      title: 'Test Exercise',
      description: undefined,
      tags: ['testing'],
    };
    const color = service.getTagColor('testing');
    expect(color).toBe('#FF980088');
  });
});
