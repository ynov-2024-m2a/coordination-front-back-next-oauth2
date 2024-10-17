import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const AddListQuery = async ({ title }: Prisma.ListCreateInput) => {
  const list = await prisma.list.create({
    data: {
      title,
    },
  });

  return list;
};
