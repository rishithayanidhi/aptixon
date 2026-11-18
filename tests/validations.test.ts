import { describe, expect, it } from "vitest";
import { crewOtpRequestSchema, kycSchema, loginSchema } from "../lib/validations";

describe("validation schemas", () => {
  it("accepts a valid international phone number", () => {
    expect(crewOtpRequestSchema.parse({ phone: "+919876543210" }).phone).toBe("+919876543210");
  });

  it("rejects a malformed login email", () => {
    expect(() => loginSchema.parse({ email: "not-an-email", password: "long-enough-password" })).toThrow();
  });

  it("requires a 12-digit Aadhaar number", () => {
    expect(() => kycSchema.parse({ documentType: "AADHAAR", documentNumber: "123" })).toThrow();
  });
});
