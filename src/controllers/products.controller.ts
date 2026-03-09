import type { FastifyReply, FastifyRequest } from "fastify";
import type { ProductFilters } from "../types";
import { getProductById, getProducts } from "../services/products.service";
import { productFiltersSchema } from "../utils/validators";

export const listProducts = async (
  request: FastifyRequest<{ Querystring: ProductFilters }>,
  reply: FastifyReply,
) => {
  const validation = productFiltersSchema.parse(request.query);
  const result = await getProducts(validation);
  reply.status(200).send(result);
};

export const listProductById = async (
  request: FastifyRequest<{Params: {id: number}}>,
  reply: FastifyReply,
) => {
  const product = await getProductById(request.params.id);
  reply.status(200).send(product);
};
