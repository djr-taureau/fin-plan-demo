import { async, TestBed } from '@angular/core/testing';
import { AzureAdAuthProviderModule } from './azure-ad-auth-provider.module';

describe('AzureAdAuthProviderModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AzureAdAuthProviderModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(
      AzureAdAuthProviderModule
    ).toBeDefined();
  });
});
