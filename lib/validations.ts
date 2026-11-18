import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(128),
});

export const crewOtpRequestSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^\+[1-9]\d{7,14}$/, "Enter a valid international phone number"),
});

export const kycSchema = z.object({
  documentType: z.enum(["AADHAAR", "PAN", "PASSPORT"]),
  documentNumber: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s-]/g, "")),
}).superRefine((value, context) => {
  const valid = value.documentType === "AADHAAR"
    ? /^\d{12}$/.test(value.documentNumber)
    : value.documentNumber.length >= 6;

  if (!valid) {
    context.addIssue({
      code: "custom",
      message: value.documentType === "AADHAAR"
        ? "Aadhaar number must contain 12 digits"
        : "Document number is invalid",
      path: ["documentNumber"],
    });
  }
});

export type LoginInput = z.infer<typeof loginSchema>;
export type CrewOtpRequest = z.infer<typeof crewOtpRequestSchema>;
export type KycInput = z.infer<typeof kycSchema>;