import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const GetAllListQuery = async ({
  skip,
  take,
  ...props
}: Prisma.ListFindManyArgs) => {
  const list = await prisma.list.findMany({
    skip,
    take,
    ...props,
  });

  return list;
};
