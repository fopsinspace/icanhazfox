/// <reference types="lucia" />

declare namespace Lucia {
  type Auth = import('./lucia').Auth;
  type DatabaseUserAttributes = {
    username: string;
    avatar?: string;
  };
  type DatabaseSessionAttributes = {};
}
