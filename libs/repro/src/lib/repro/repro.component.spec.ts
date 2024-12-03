import { fakeAsync, tick } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { ReproComponent } from './repro.component';

describe('ReproComponent', () => {
  it('should create', fakeAsync(async () => {
    const component = await render(ReproComponent, {});
    tick(1000);
    expect(component).toBeTruthy();
  }));
});
