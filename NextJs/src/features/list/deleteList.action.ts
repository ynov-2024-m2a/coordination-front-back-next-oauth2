"use server";

import { action } from "@/lib/backend/safe-actions";
import { z } from "zod";
import { DeleteListQuery } from "./delete.query";

export const DeleteListAction = action
  .schema(
    z.object({
      listId: z.string(),
    }),
  )
  .action(async ({ parsedInput: { listId } }) => {
    await DeleteListQuery({ id: listId });
  });
