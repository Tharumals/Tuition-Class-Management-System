import { IntroRoutingModule } from './intro-routing.module';

describe('IntroRoutingModule', () => {
  let introRoutingModule: IntroRoutingModule;

  beforeEach(() => {
    introRoutingModule = new IntroRoutingModule();
  });

  it('should create an instance', () => {
    expect(introRoutingModule).toBeTruthy();
  });
});
