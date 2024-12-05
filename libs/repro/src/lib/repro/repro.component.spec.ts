import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  TranslateModule,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
import { render } from '@testing-library/angular';
import { ReproComponent } from './repro.component';

describe('ReproComponent', () => {
  it('should create', async () => {
    await render(ReproComponent, {
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: ChangeDetectorRef, useValue: {} }],
    });
    const service = TestBed.inject(TranslateService);
    const cd = TestBed.inject(ChangeDetectorRef);
    const pipe = new TranslatePipe(service, cd);
    expect(pipe.transform('test')).toBeTruthy();
  });
});
