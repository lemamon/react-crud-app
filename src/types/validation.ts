import { z } from "zod";

const isAdult = (birthDate: string) => {
  const date = new Date(birthDate);
  const ageDifMs = Date.now() - date.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;
};

const phoneNumberRegex = /^\+?[1-9]\d{8,14}$/;

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  birthDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    })
    .refine(isAdult, {
      message: "User must be at least 18 years old",
    }),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z
    .string()
    .min(9, "Phone number is required")
    .regex(phoneNumberRegex, "Invalid phone number format"),
});
