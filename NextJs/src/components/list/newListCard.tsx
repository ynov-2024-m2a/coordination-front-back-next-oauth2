import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Typography } from "../ui/typography";
import { AddListDialog } from "./addListDialog";

export type NewListCardProps = {};

export const NewListCard = (props: NewListCardProps) => {
  return (
    <Card className="h-24 flex mt-4 bg-card mr-4 w-fit">
      <CardContent>
        <div className="w-full h-full flex-col flex justify-center item-center">
          <AddListDialog>
            <Button variant="outline" className="w-full mt-4">
              <div className="flex item-center gap-2">
                <PlusCircle className="text-primary" />
                <Typography>Add List</Typography>
              </div>
            </Button>
          </AddListDialog>
        </div>
      </CardContent>
    </Card>
  );
};
