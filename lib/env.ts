function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export const env = {
  databaseUrl: readEnv("DATABASE_URL"),
  redisUrl: readEnv("REDIS_URL"),
  resendApiKey: readEnv("RESEND_API_KEY"),
  stripeSecretKey: readEnv("STRIPE_SECRET_KEY"),
  twilioAccountSid: readEnv("TWILIO_ACCOUNT_SID"),
  twilioAuthToken: readEnv("TWILIO_AUTH_TOKEN"),
  authSecret: readEnv("AUTH_SECRET"),
};