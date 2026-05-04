import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { AuthService } from './services/auth.service';
import { signal } from '@angular/core';
import { vi } from 'vitest';

describe('App', () => {
  let authServiceMock: any;

  beforeEach(async () => {
    authServiceMock = {
      user: signal(null),
      loginWithGoogle: vi.fn(),
      logout: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render login component when not authenticated', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-login')).toBeTruthy();
  });

  it('should render user info when authenticated', async () => {
    authServiceMock.user.set({ displayName: 'Test User' });
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Zalogowano jako: Test User');
  });
});
