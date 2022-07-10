import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker'

import PrismaLinkProxy from "./prisma";

const prisma = new PrismaClient()

describe('PrismaLinkProxy:', () => {
  beforeAll(async () => {
    await prisma.link.deleteMany({})
  })
  beforeEach(async () => {
    await prisma.link.deleteMany({})
  })

  describe('create', () => {
    it('returns a new link on creation', async () => {
      const { proxy, makeData } = factory();
      const initial = makeData();
      const link = await proxy.create(initial);
  
      expect(link.id).toBeTruthy()
      expect(link.description).toBe(initial.description)
      expect(link.url).toBe(initial.url)
    })
  })

  describe('getAll', () => {
    it('returns a list of links', async () => {
      const { proxy, makeData } = factory();
      await Promise.all([
        proxy.create(makeData()),
        proxy.create(makeData()),
        proxy.create(makeData())
      ]);

      const links = await proxy.getAll();

      expect(links.length).toBe(3);
    });
  })

  describe('getById', () => {
    it('returns a link by id', async () => {
      const { proxy, makeData } = factory();
      const link = await proxy.create(makeData());
    })
  })
})

function factory() {
  const proxy = new PrismaLinkProxy()
  const makeData = () => ({
    description: faker.lorem.lines(1),
    url: faker.internet.url(),
  })

  return { proxy, makeData }
}