import environment from "./helpers/environment";

export function getRoomsSource() {
  const roomsSource = process.env.ROOMS_SOURCE;
  return roomsSource;
}

export function shouldEnforceSSL() {
  const enforceSSL = process.env.ENFORCE_SSL || "false";

  return enforceSSL === "true";
}

export function getEnvironment() {
  return process.env.NODE_ENV;
}

export function getSessionConfig() {
  const cookieSessionKey = process.env.COOKIE_SESSION_SECRET || "matrix-session";
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  const maxAge = environment.parseVariable(process.env.COOKIE_SESSION_MAX_AGE)
    || thirtyDays;

  return {
    name: "matrix-session",
    keys: [cookieSessionKey],
    maxAge,
  };
}

export function getAuthConfig() {
  const defaultAuthStrategy = "google";
  const clientID = process.env.GOOGLE_CLIENT_ID || "XXXX";
  const clientSecret = process.env.GOOGLE_SECRET || "XXXX";
  const callbackURL = process.env.GOOGLE_CALLBACK_URL
    || "http://localhost:8080/auth/google/callback";

  return {
    authStrategy: defaultAuthStrategy,
    clientID,
    clientSecret,
    callbackURL,
  };
}

export function getAllowedDomains() {
  const allowedDomains = environment.parseVariable(process.env.WHITELIST_DOMAINS) || [];

  return allowedDomains;
}

export function getAllowedUsers() {
  const allowedUsers = environment.parseVariable(process.env.WHITELIST_USERS) || [];

  return allowedUsers;
}

export function getServerConfig() {
  const host = "0.0.0.0";
  const port = process.env.PORT || 8080;

  return { host, port };
}
