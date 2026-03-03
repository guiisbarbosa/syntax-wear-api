import { FastifyInstance } from "fastify";
import { register } from "../controllers/auth.controller";

const schema = {
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
          format: "email",
          description: "Email do usuário",
        },
        password: {
          type: "string",
          format: "password",
          description: "Senha do usuário",
        },
        cpf: {
          type: "string",
          description: "CPF do usuário (opcional)",
        },
        birthDate: {
          type: "string",
          format: "date",
          description: "Data de nascimento do usuário (opcional) - formato: YYYY-MM-DD",
        },
        phone: {
          type: "string",
          description: "Telefone do usuário (opcional)",
        },
      },
    },
  },
};

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/", schema, register);
}
