import { List } from "@/components/list/list";
import { NewListCard } from "@/components/list/newListCard";
import { GetAllListQuery } from "@/features/list/getAllList.query";
import { ListDto } from "@/features/list/listDto.schema";

const HomePage = async () => {
  const lists: ListDto[] = await GetAllListQuery({});

  return (
    <div className="relative flex h-full bg-background text-foreground gap-2">
      {lists.map((list) => (
        <List list={list} key={list.id} />
      ))}
      <NewListCard />
    </div>
  );
};

export default HomePage;
