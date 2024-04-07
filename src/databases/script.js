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
  'Product Name',
  10000,
  100,
  'Example product description.',
  'https://example.com/product-image.jpg'
);
