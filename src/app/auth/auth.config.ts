import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SILENCE_REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
};


export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '2PkX8PHl8dtivodj02G4efs6gQdUMuV0',
  CLIENT_DOMAIN: 'concept.auth0.com',
  SILENCE_REDIRECT: 'http://localhost:8083/silent',
  AUDIENCE: 'http://localhost:8083/api/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles'
};
