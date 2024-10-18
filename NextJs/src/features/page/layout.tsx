import type { ComponentPropsWithoutRef } from "react";
import { Typography } from "../../components/ui/typography";
import { cn } from "../../lib/utils";

export const Layout = (
  props: ComponentPropsWithoutRef<"div"> & {
    size?: "sm" | "default" | "lg";
  },
) => {
  return (
    <div
      {...props}
      className={cn(
        "max-w-4xl flex-wrap w-full flex gap-4 m-auto px-4 mt-4",
        {
          "max-w-7xl": props.size === "lg",
          "max-w-3xl": props.size === "sm",
        },
        props.className,
      )}
    />
  );
};

const LayoutHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-start gap-2 flex-col w-full md:flex-1 min-w-[200px]",
        props.className,
      )}
    />
  );
};

const LayoutTitle = (props: ComponentPropsWithoutRef<"h1">) => {
  return <Typography {...props} variant="h2" className={cn(props.className)} />;
};

const LayoutDescription = (props: ComponentPropsWithoutRef<"p">) => {
  return <Typography {...props} className={cn(props.className)} />;
};

const LayoutActions = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className={cn("flex items-center", props.className)} />
  );
};

export const LayoutContent = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} className={cn("w-full", props.className)} />;
};
