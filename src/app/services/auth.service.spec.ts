import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Auth } from '@angular/fire/auth';

describe('AuthService', () => {
  let service: AuthService;
  let authMock: any;

  beforeEach(() => {
    authMock = {
      currentUser: null,
    };

    TestBed.configureTestingModule({
      providers: [AuthService, { provide: Auth, useValue: authMock }],
    });
    service = TestBed.inject(AuthService);
  });

  it('powinien zostać utworzony', () => {
    expect(service).toBeTruthy();
  });
});
