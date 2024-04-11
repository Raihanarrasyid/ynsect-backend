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
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825550/li7ednabfcllivkiojs3.png'
);

addProduct(
  'Protein BSF Larva',
  32000,
  100,
  'Example product description.',
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825549/ccjibsz50mwxgflr8y69.png'
);

addProduct(
  'Minyak BSF Larva',
  32000,
  100,
  'Example product description.',
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825549/n4nrfhsllwncum0y1eap.png'
);

addProduct(
  'BSF Larva Hidup',
  32000,
  100,
  'Example product description.',
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825549/vhxxjvbskefyjapnclgc.png'
);

addProduct(
  'Pelet BSF',
  32000,
  100,
  'Example product description.',
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825550/po2jb5tlbzosnjfcfeyl.png'
);

addProduct(
  'Pupuk BSF',
  32000,
  100,
  'Example product description.',
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825548/bsqimfbijqerstuend0g.png'
);
