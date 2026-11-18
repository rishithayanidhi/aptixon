export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly status = 500,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function toSafeErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "An unexpected error occurred";
}