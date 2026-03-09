import { prisma } from "../utils/prisma";
import { ProductFilters } from "../types";
import { th } from "zod/v4/locales";

export const getProducts = async (filters: ProductFilters) => {
  const {
    minPrice,
    maxPrice,
    search,
    page = 1,
    limit = 10,
    sortBy = "name",
    sortOrder = "asc",
  } = filters;

  const where: any = {
    active: true,
  };

  // Filtro por preço
  if (minPrice !== undefined || maxPrice !== undefined) {
    where.price = {};
    if (minPrice !== undefined) {
      where.price.gte = minPrice;
    }
    if (maxPrice !== undefined) {
      where.price.lte = maxPrice;
    }
  }

  // Filtro por busca (nome ou descrição)
  if (search) {
    where.OR = [
      {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  // Ordenação
  const orderBy: any = {};
  orderBy[sortBy] = sortOrder;

  // Paginação
  const skip = (page - 1) * limit;

  const result = await prisma.product.findMany({
    where,
    orderBy,
    skip,
    take: limit,
  });

  // Contar total de registros para paginação
  const total = await prisma.product.count({ where });

  return {
    data: result,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    },
  };
};

export const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if(!product) {
    throw new Error("Produto não encontrado");
  }

  return product
}