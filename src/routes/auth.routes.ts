import { FastifyInstance } from "fastify";
import { register, login } from "../controllers/auth.controller";

const registerSchema = {
  schema: {
    tags: ["Auth"],
    description: "Registra um novo usuário e retorna um token",
    body: {
      type: "object",
      required: ["firstName", "lastName", "email", "password"],
      properties: {
        firstName: { type: "string", description: "Nome do usuário" },
        lastName: { type: "string", description: "Sobrenome do usuário" },
        email: {
          type: "string",
          description: "Email do usuário",
        },
        password: {
          type: "string",
          description: "Senha do usuário",
        },
        cpf: {
          type: "string",
          description: "CPF do usuário (opcional)",
        },
        birthDate: {
          type: "string",
          description:
            "Data de nascimento do usuário (opcional) - formato: YYYY-MM-DD",
        },
        phone: {
          type: "string",
          description: "Telefone do usuário (opcional)",
        },
      },
    },
  },
};

const loginSchema = {
  schema: {
    tags: ["Auth"],
    description: "Realiza o login de um usuário e retorna um token",
    body: {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: {
          type: "string",
          description: "Email do usuário",
        },
        password: {
          type: "string",
          description: "Senha do usuário",
        },
      },
    },
  },
};

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/register", registerSchema, register);
  fastify.post("/login", loginSchema, login);
}
