const { PrismaClient } = require('@prisma/client');

async function addProduct(name, price, stock, summary = null, description = null, image = null) {
  const prisma = new PrismaClient();

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        stock,
        summary,
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
  'Sumber protein yang sempurna untuk ternak dan hewan peliharaan Anda.',
  `<p>Larva BSF kering:</p>
  <ul>
  <li>Kualitas Unggulan: Produk larva kering yang kami jual adalah pilihan premium yang terjamin kualitasnya. Kami memastikan larva kami berasal dari sumber yang terpercaya dan diproses dengan standar kualitas tertinggi untuk memberikan produk terbaik kepada pelanggan.</li>
  <li>Formula Kaya Nutrisi: Larva kering kami diformulasikan khusus dengan tambahan vitamin dan mineral untuk memberikan nutrisi optimal kepada hewan peliharaan. Ini menjadikan produk kami pilihan utama bagi pemilik hewan yang peduli akan kesehatan dan kesejahteraan binatang peliharaan mereka.</li>
  <li>Rekomendasi dari Pakar: Produk kami didukung oleh penelitian dan rekomendasi dari para ahli hewan peliharaan, sehingga pelanggan merasa yakin bahwa mereka memberikan makanan yang tepat kepada hewan kesayangan mereka.</li>
  <li>Kemudahan Penyimpanan dan Penggunaan: Larva kering kami dikemas dalam kemasan yang praktis dan mudah disimpan. Ini memberi kenyamanan kepada pelanggan kami dalam penyimpanan dan penggunaan produk, serta memastikan kesegaran dan kualitasnya tetap terjaga.</li>
  <li>Pilihan Varian dan Ukuran: Kami menyediakan berbagai pilihan varian dan ukuran produk larva kering sesuai dengan kebutuhan pelanggan. Hal ini memungkinkan pelanggan untuk memilih produk yang sesuai dengan jenis dan ukuran hewan peliharaan mereka.
  Dukungan Purna Jual: Kami memberikan dukungan penuh kepada pelanggan kami, baik dalam hal informasi tentang produk maupun layanan purna jual. Tim kami siap membantu dengan pertanyaan atau masalah apa pun yang mungkin timbul terkait dengan produk kami.</li>
  </ul>`,
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825550/li7ednabfcllivkiojs3.png'
);

addProduct(
  'Protein BSF Larva',
  32000,
  100,
  'Alternatif pakan pengganti bagi ternak dan hewan peliharaan Anda.',
  `<p>[Summary]: Protein BSF Larva</p>
  <ul>
  <li>Kualitas Unggulan : Kaya akan protein berkualitas tinggi yang dibutuhkan untuk pertumbuhan dan pemeliharaan tubuh.</li>
  <li>Formula Kaya Nutrisi : Dirancang khusus untuk memberikan asupan protein optimal bagi hewan peliharaan atau ternak Anda.</li>
  <li>Rekomendasi dari Pakar : Direkomendasikan oleh pakar dalam industri pakan ternak sebagai sumber protein yang berkualitas dan mudah dicerna.</li>
  <li>Kemudahan Penyimpanan dan Penggunaan : Mudah disimpan dan digunakan, dapat diintegrasikan ke dalam campuran pakan dengan mudah.</li>
  <li>Pilihan Varian dan Ukuran : Tersedia dalam berbagai varian kemasan dan ukuran untuk memenuhi kebutuhan berbagai skala peternakan.</li>
  </ul>`,
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825549/ccjibsz50mwxgflr8y69.png'
);

addProduct(
  'Minyak BSF Larva',
  32000,
  100,
  'Hasil olahan larva yang diperas menghasilkan minyak lemak berkualitas',
  `<p>[Summary]: Protein BSF Larva</p>
  <ul>
  <li>Kualitas Unggulan : Kaya akan protein berkualitas tinggi yang dibutuhkan untuk pertumbuhan dan pemeliharaan tubuh.</li>
  <li>Formula Kaya Nutrisi : Dirancang khusus untuk memberikan asupan protein optimal bagi hewan peliharaan atau ternak Anda.</li>
  <li>Rekomendasi dari Pakar : Direkomendasikan oleh pakar dalam industri pakan ternak sebagai sumber protein yang berkualitas dan mudah dicerna.</li>
  <li>Kemudahan Penyimpanan dan Penggunaan : Mudah disimpan dan digunakan, dapat diintegrasikan ke dalam campuran pakan dengan mudah.</li>
  <li>Pilihan Varian dan Ukuran : Tersedia dalam berbagai varian kemasan dan ukuran untuk memenuhi kebutuhan berbagai skala peternakan.</li>
  </ul>`,
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825549/n4nrfhsllwncum0y1eap.png'
);

addProduct(
  'BSF Larva Hidup',
  32000,
  100,
  'Larva hidup yang dicuci bersih dapat meningkatkan pertumbuhan hewan.',
  `<p>[Summary]: Protein BSF Larva</p>
  <ul>
  <li>Kualitas Unggulan : Kaya akan protein berkualitas tinggi yang dibutuhkan untuk pertumbuhan dan pemeliharaan tubuh.</li>
  <li>Formula Kaya Nutrisi : Dirancang khusus untuk memberikan asupan protein optimal bagi hewan peliharaan atau ternak Anda.</li>
  <li>Rekomendasi dari Pakar : Direkomendasikan oleh pakar dalam industri pakan ternak sebagai sumber protein yang berkualitas dan mudah dicerna.</li>
  <li>Kemudahan Penyimpanan dan Penggunaan : Mudah disimpan dan digunakan, dapat diintegrasikan ke dalam campuran pakan dengan mudah.</li>
  <li>Pilihan Varian dan Ukuran : Tersedia dalam berbagai varian kemasan dan ukuran untuk memenuhi kebutuhan berbagai skala peternakan.</li>
  </ul>`,
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825549/vhxxjvbskefyjapnclgc.png'
);

addProduct(
  'Pelet BSF',
  32000,
  100,
  'Alternatif pakan sehat pengganti bagi ikan peliharaan Anda',
  `<p>[Summary]: Protein BSF Larva</p>
  <ul>
  <li>Kualitas Unggulan : Kaya akan protein berkualitas tinggi yang dibutuhkan untuk pertumbuhan dan pemeliharaan tubuh.</li>
  <li>Formula Kaya Nutrisi : Dirancang khusus untuk memberikan asupan protein optimal bagi hewan peliharaan atau ternak Anda.</li>
  <li>Rekomendasi dari Pakar : Direkomendasikan oleh pakar dalam industri pakan ternak sebagai sumber protein yang berkualitas dan mudah dicerna.</li>
  <li>Kemudahan Penyimpanan dan Penggunaan : Mudah disimpan dan digunakan, dapat diintegrasikan ke dalam campuran pakan dengan mudah.</li>
  <li>Pilihan Varian dan Ukuran : Tersedia dalam berbagai varian kemasan dan ukuran untuk memenuhi kebutuhan berbagai skala peternakan.</li>
  </ul>`,
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825550/po2jb5tlbzosnjfcfeyl.png'
);

addProduct(
  'Pupuk BSF',
  32000,
  100,
  'Hasil olahan larva mati yang diolah menjadi pupuk berkualitas untuk tanaman',
  `<p>[Summary]: Protein BSF Larva</p>
  <ul>
  <li>Kualitas Unggulan : Kaya akan protein berkualitas tinggi yang dibutuhkan untuk pertumbuhan dan pemeliharaan tubuh.</li>
  <li>Formula Kaya Nutrisi : Dirancang khusus untuk memberikan asupan protein optimal bagi hewan peliharaan atau ternak Anda.</li>
  <li>Rekomendasi dari Pakar : Direkomendasikan oleh pakar dalam industri pakan ternak sebagai sumber protein yang berkualitas dan mudah dicerna.</li>
  <li>Kemudahan Penyimpanan dan Penggunaan : Mudah disimpan dan digunakan, dapat diintegrasikan ke dalam campuran pakan dengan mudah.</li>
  <li>Pilihan Varian dan Ukuran : Tersedia dalam berbagai varian kemasan dan ukuran untuk memenuhi kebutuhan berbagai skala peternakan.</li>
  </ul>`,
  'https://res.cloudinary.com/ddp4vz8jq/image/upload/v1712825548/bsqimfbijqerstuend0g.png'
);
