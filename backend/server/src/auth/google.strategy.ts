import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID: '431203076451-8k15okmtojojjgclcpj1kdq0lslb10d0.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile', 'https://www.googleapis.com/auth/calendar.readonly'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const user = {
      email: profile.emails[0].value,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      picture: profile.photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
