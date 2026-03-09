import z from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, "Nome é obrigatório"),
  lastName: z.string().min(1, "Sobrenome é obrigatório"),
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
  cpf: z.string().optional(),
  birthDate: z.string().optional(),
  phone: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
});

export const productFiltersSchema = z.object({
  page: z.coerce
    .number()
    .nonnegative("Página deve ser no mínimo 1")
    .optional(),
  limit: z.coerce.number().optional(),
  minPrice: z.coerce
    .number()
    .nonnegative("Preço mínimo precisa ser positivo")
    .optional(),
  maxPrice: z.coerce
    .number()
    .nonnegative("Preço máximo precisa ser positivo")
    .optional(),
  search: z.string().optional(),
  sortBy: z.enum(["price", "name", "createdAt"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});
