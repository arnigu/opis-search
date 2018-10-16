import { GuidanceModule } from './guidance.module';

describe('GuidanceModule', () => {
  let guidanceModule: GuidanceModule;

  beforeEach(() => {
    guidanceModule = new GuidanceModule();
  });

  it('should create an instance', () => {
    expect(guidanceModule).toBeTruthy();
  });
});
