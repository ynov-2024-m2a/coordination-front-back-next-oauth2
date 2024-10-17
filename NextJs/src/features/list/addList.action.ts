"use server";

import { action } from "@/lib/backend/safe-actions";
import { AddListQuery } from "./addList.query";
import { AddListSchema } from "./addListSchema";

export const AddListAction = action
  .schema(AddListSchema)
  .action(async ({ parsedInput: { title } }) => {
    const list = await AddListQuery({ title });

    return list;
  });
