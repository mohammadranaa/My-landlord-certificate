import { z } from "zod";

export const signupSchema = z.object({
  agencyName: z.string().min(2, "Enter your agency name"),
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
  website: z.string().optional(),
  propertiesManaged: z.coerce.number().int().min(0).optional(),
});

export type SignupData = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
});

export type LoginData = z.infer<typeof loginSchema>;

export const accountUpdateSchema = z.object({
  agencyName: z.string().min(2, "Enter your agency name"),
  fullName: z.string().min(2, "Enter your full name"),
  phone: z.string().optional(),
  website: z.string().optional(),
  propertiesManaged: z.coerce.number().int().min(0).optional(),
});

export type AccountUpdateData = z.infer<typeof accountUpdateSchema>;
