const { PrismaClient } = require('@prisma/client');

async function addProduct(name, price, stock, description = null, image = null) {
  const prisma = new PrismaClient();

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        stock,
        description,
        image
      }
    });

    console.log(`Product successfully added with ID: ${newProduct.id}`);
  } catch (error) {
    console.error('Error adding product:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addProduct(
  'Larva BSF Kering',
  32000,
  100,
  'Example product description.',
  'https://example.com/product-image.jpg'
);

addProduct(
  'Protein BSF Larva',
  32000,
  100,
  'Example product description.',
  'https://example.com/product-image.jpg'
);

addProduct(
  'Minyak BSF Larva',
  32000,
  100,
  'Example product description.',
  'https://example.com/product-image.jpg'
);

addProduct(
  'BSF Larva Hidup',
  32000,
  100,
  'Example product description.',
  'https://example.com/product-image.jpg'
);

addProduct(
  'Pelet BSF',
  32000,
  100,
  'Example product description.',
  'https://example.com/product-image.jpg'
);

addProduct(
  'Pupuk BSF',
  32000,
  100,
  'Example product description.',
  'https://example.com/product-image.jpg'
);
