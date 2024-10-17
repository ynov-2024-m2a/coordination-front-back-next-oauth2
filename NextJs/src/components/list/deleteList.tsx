"use client";

import { DeleteListAction } from "@/features/list/deleteList.action";
import { isActionSuccessful } from "@/lib/backend/action-utils";
import { useMutation } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader } from "../ui/loader";
import { InlineTooltip } from "../ui/tooltip";

export type DeleteListProps = {
  listId: string;
};

export const DeleteList = ({ listId }: DeleteListProps) => {
  const router = useRouter();

  const { isPending, mutateAsync: deleteListAsync } = useMutation({
    mutationFn: async () => {
      const result = await DeleteListAction({ listId });

      if (!isActionSuccessful(result)) toast.error(result?.serverError);
    },
    onSuccess: () => {
      toast.success(`List deleted successfully`);
      router.refresh();
    },
  });

  return (
    <InlineTooltip title="Delete list">
      {isPending ? (
        <Loader />
      ) : (
        <Trash2
          className="text-red-400 group-hover:block hidden cursor-pointer"
          onClick={(e) => {
            e.preventDefault(), e.stopPropagation(), deleteListAsync();
          }}
        />
      )}
    </InlineTooltip>
  );
};
