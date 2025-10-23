import z from "zod";

export const userSchema = z.object({
    name: z.string().min(2, "Минимум 2 символа").max(64, "Максимум 64 символа"),
    username: z.string().min(2, "Минимум 2 символа").max(64, "Максимум 64 символа"),
    email: z.email("Некорректный email"),
    city: z.string().min(2, "Минимум 2 символа").max(64, "Максимум 64 символа"),
    phone: z.string().regex(/^\d+$/, "Телефон должен содержать только цифры"),
    companyName: z.string().min(2, "Минимум 2 символа").max(64, "Максимум 64 символа"),
});

export type UserFormData = z.infer<typeof userSchema>;
