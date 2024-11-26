import * as z from "zod";

export const CONTACT_US_SCHEMA = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.trim()
		.min(3, {
			message: "Email should contain a minimum of 3 characters",
		})
		.email("Invalid email address"),
	password: z.string({ required_error: "Password is required" }).trim(),
});
