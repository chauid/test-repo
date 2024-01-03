import type { Prisma } from '@prisma/client';
import client from '../utils/prisma-client';

export const getdata = () => {
  return client.admins.findMany();
};

export type ProductType = Prisma.PromiseReturnType<typeof getdata>;
