import { z } from "zod";
import { userSchema } from "./validation";

export const extendedUserSchema = userSchema.extend({
  id: z.string(),
});

export type User = z.infer<typeof extendedUserSchema>;
export type UserFormInputs = z.infer<typeof userSchema>;
