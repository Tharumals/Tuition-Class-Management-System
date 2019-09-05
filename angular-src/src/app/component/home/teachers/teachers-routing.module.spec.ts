import { TeachersRoutingModule } from './teachers-routing.module';

describe('TeachersRoutingModule', () => {
  let teachersRoutingModule: TeachersRoutingModule;

  beforeEach(() => {
    teachersRoutingModule = new TeachersRoutingModule();
  });

  it('should create an instance', () => {
    expect(teachersRoutingModule).toBeTruthy();
  });
});
