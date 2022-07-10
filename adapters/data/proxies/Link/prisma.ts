import { PrismaClient } from '@prisma/client'

import { DatabaseError } from '~/adapters/data/DatabaseError'
import Link from '~/lib/links/model.d'

import Contract from './.d'


export default class PrismaLinkProxy implements Contract {
  private prisma = new PrismaClient();

  async create(link: Omit<Link, 'id'>): Promise<Link> {
    return await this.prisma.link.create({ data: link });
  }

  async getAll(): Promise<Link[]> {
    return await this.prisma.link.findMany();
  }

  async getById(id: number): Promise<Link> {
    const found = await this.prisma.link.findFirst({
      where: { id }
    });

    if (!found) throw new DatabaseError('link not found');

    return found;
  }

  async update(id: number, changes: Partial<Link>): Promise<Link> {
    return await this.prisma.link.update({
      data: Object.assign({}, changes),
      where: { id }
    })
  }

  async delete(id: number): Promise<Link> {
    return await this.prisma.link.delete({
      where: { id }
    })
  }
}