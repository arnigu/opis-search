import { GoProCoreModule } from './goprocore.module';

describe('GoProCoreModule', () => {
  let goprocoreModule: GoProCoreModule;

  beforeEach(() => {
    goprocoreModule = new GoProCoreModule();
  });

  it('should create an instance', () => {
    expect(goprocoreModule).toBeTruthy();
  });
});
