const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Agenda {
  async getAll() {
    const agenda = await prisma.agenda.findMany();
    return agenda;
  }

  async create(data) {
    return await prisma.agenda.create({ data: data });
  }

  async update(id, data) {
    return await prisma.agenda.update({
      where: { id: id },
      data: data
    });
  }

  async delete(id) {
    return await prisma.agenda.delete({
      where: { id: id }
    });
  }

  async getById(id) {
    const agenda = await prisma.agenda.findUnique({
      where: { id: id }
    });
    return agenda;
  }
}

module.exports = Agenda;
