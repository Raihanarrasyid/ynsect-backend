const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Agenda {
  async getAll() {
    const agenda = await prisma.agenda.findMany();
    return agenda;
  }

  async create(data) {
    return await prisma.agenda.create(data);
  }

  async update(id, data) {
    return await prisma.agenda.update({
      where: { id: parseInt(id) },
      data: data
    });
  }

  async delete(id) {
    return await prisma.agenda.delete({
      where: { id: parseInt(id) }
    });
  }

  async getById(id) {
    const agenda = await prisma.agenda.findUnique({
      where: { id: parseInt(id) }
    });
    return agenda;
  }

  async createManyData(data) {
    return await prisma.agenda.createMany({ data });
  }
}

module.exports = Agenda;
