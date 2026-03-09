import { FastifyInstance } from "fastify";
import { listProducts } from "../controllers/products.controller";
import { authenticate } from "../middlewares/auth.middleware";

const listProductsSchema = {
  schema: {
    tags: ["Products"],
    description: "Lista todos os produtos com filtros opcionais",
    querystring: {
      type: "object",
      properties: {
        page: { type: "number", description: "Número da página (padrão: 1)" },
        limit: {
          type: "number",
          description: "Quantidade de produtos por página (padrão: 10)",
        },
        minPrice: { type: "number", description: "Preço mínimo" },
        maxPrice: { type: "number", description: "Preço máximo" },
        search: { type: "string", description: "Buscar por nome do produto" },
        sortBy: {
          type: "string",
          enum: ["price", "name", "createdAt"],
          description: "Campo para ordenação",
        },
        sortOrder: {
          type: "string",
          enum: ["asc", "desc"],
          description: "Direção da ordenação",
        },
      },
    },
  },
};

export default async function productRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", authenticate);
  fastify.get("/", listProductsSchema, listProducts);
}
