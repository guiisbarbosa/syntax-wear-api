import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Limpar dados existentes (opcional)
  await prisma.product.deleteMany();

  // Criar 10 produtos
  const products = await prisma.product.createMany({
    data: [
      {
        name: "T-Shirt Classic Black",
        slug: "t-shirt-classic-black",
        description:
          "Camiseta clássica de algodão 100% em cor preta, confortável e elegante para o dia a dia.",
        price: 49.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/tshirt-black-1.jpg",
            "https://example.com/images/tshirt-black-2.jpg",
          ]),
        ),
        sizes: JSON.parse(JSON.stringify(["XS", "S", "M", "L", "XL", "XXL"])),
        colors: JSON.parse(JSON.stringify(["Preto", "Cinza", "Branco"])),
        stock: 50,
        active: true,
      },
      {
        name: "Hoodie Gray",
        slug: "hoodie-gray",
        description:
          "Moletom cinza quente e aconchegante, perfeito para dias frios com design moderno.",
        price: 129.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/hoodie-gray-1.jpg",
            "https://example.com/images/hoodie-gray-2.jpg",
          ]),
        ),
        sizes: JSON.parse(JSON.stringify(["S", "M", "L", "XL", "XXL"])),
        colors: JSON.parse(JSON.stringify(["Cinza", "Preto", "Marrom"])),
        stock: 30,
        active: true,
      },
      {
        name: "Jeans Blue Straight",
        slug: "jeans-blue-straight",
        description:
          "Calça jeans azul em modelagem reta clássica, durável e versátil para qualquer ocasião.",
        price: 189.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/jeans-blue-1.jpg",
            "https://example.com/images/jeans-blue-2.jpg",
          ]),
        ),
        sizes: JSON.parse(
          JSON.stringify(["28", "30", "32", "34", "36", "38", "40"]),
        ),
        colors: JSON.parse(
          JSON.stringify(["Azul Escuro", "Azul Claro", "Preto"]),
        ),
        stock: 25,
        active: true,
      },
      {
        name: "Sneakers White Leather",
        slug: "sneakers-white-leather",
        description:
          "Tênis branco em couro premium, confortável para o dia inteiro com design minimalista.",
        price: 299.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/sneakers-white-1.jpg",
            "https://example.com/images/sneakers-white-2.jpg",
            "https://example.com/images/sneakers-white-3.jpg",
          ]),
        ),
        sizes: JSON.parse(
          JSON.stringify(["35", "36", "37", "38", "39", "40", "41", "42"]),
        ),
        colors: JSON.parse(
          JSON.stringify(["Branco", "Branco/Cinza", "Preto/Branco"]),
        ),
        stock: 45,
        active: true,
      },
      {
        name: "Polo Shirt Red",
        slug: "polo-shirt-red",
        description:
          "Camisa polo vermelha em algodão respirável, sofisticada e ideal para trabalho ou lazer.",
        price: 79.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/polo-red-1.jpg",
            "https://example.com/images/polo-red-2.jpg",
          ]),
        ),
        sizes: JSON.parse(JSON.stringify(["XS", "S", "M", "L", "XL", "XXL"])),
        colors: JSON.parse(
          JSON.stringify(["Vermelho", "Azul Marinho", "Verde"]),
        ),
        stock: 35,
        active: true,
      },
      {
        name: "Shorts Khaki",
        slug: "shorts-khaki",
        description:
          "Short em tons de bege/cáqui, prático e estiloso para dias quentes e atividades casual.",
        price: 89.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/shorts-khaki-1.jpg",
            "https://example.com/images/shorts-khaki-2.jpg",
          ]),
        ),
        sizes: JSON.parse(JSON.stringify(["P", "M", "G", "GG", "GGG"])),
        colors: JSON.parse(JSON.stringify(["Cáqui", "Bege", "Marrom"])),
        stock: 40,
        active: true,
      },
      {
        name: "Jacket Bomber Black",
        slug: "jacket-bomber-black",
        description:
          "Jaqueta bomber em preto, material resistente e corte moderno, perfeita para sair de noite.",
        price: 249.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/jacket-bomber-1.jpg",
            "https://example.com/images/jacket-bomber-2.jpg",
            "https://example.com/images/jacket-bomber-3.jpg",
          ]),
        ),
        sizes: JSON.parse(JSON.stringify(["XS", "S", "M", "L", "XL"])),
        colors: JSON.parse(JSON.stringify(["Preto", "Cinza Escuro", "Khaki"])),
        stock: 20,
        active: true,
      },
      {
        name: "Dress Black Elegant",
        slug: "dress-black-elegant",
        description:
          "Vestido preto elegante e refinado, ideal para eventos especiais e ocasiões formais.",
        price: 199.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/dress-black-1.jpg",
            "https://example.com/images/dress-black-2.jpg",
          ]),
        ),
        sizes: JSON.parse(JSON.stringify(["XS", "S", "M", "L", "XL"])),
        colors: JSON.parse(JSON.stringify(["Preto", "Branco", "Vermelho"])),
        stock: 15,
        active: true,
      },
      {
        name: "Sweatpants Navy",
        slug: "sweatpants-navy",
        description:
          "Calça moletom azul marinho, super confortável para usar em casa ou na academia.",
        price: 99.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/sweatpants-navy-1.jpg",
            "https://example.com/images/sweatpants-navy-2.jpg",
          ]),
        ),
        sizes: JSON.parse(JSON.stringify(["XS", "S", "M", "L", "XL", "XXL"])),
        colors: JSON.parse(JSON.stringify(["Azul Marinho", "Cinza", "Preto"])),
        stock: 38,
        active: true,
      },
      {
        name: "Cap Baseball White",
        slug: "cap-baseball-white",
        description:
          "Boné branco estilo baseball, acessório versátil que combina com vários looks casual.",
        price: 39.9,
        images: JSON.parse(
          JSON.stringify([
            "https://example.com/images/cap-white-1.jpg",
            "https://example.com/images/cap-white-2.jpg",
          ]),
        ),
        sizes: JSON.parse(JSON.stringify(["Único"])),
        colors: JSON.parse(JSON.stringify(["Branco", "Preto", "Azul Marinho"])),
        stock: 60,
        active: true,
      },
    ],
  });

  console.log(
    `✅ Seed criado com sucesso! ${products.count} produtos cadastrados.`,
  );
}

main()
  .catch((e) => {
    console.error("❌ Erro ao executar seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
