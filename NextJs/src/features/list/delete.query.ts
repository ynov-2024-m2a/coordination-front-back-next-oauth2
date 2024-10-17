import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const DeleteListQuery = async ({
  ...where
}: Prisma.ListWhereUniqueInput) => {
  await prisma.list.delete({
    where,
  });
};
