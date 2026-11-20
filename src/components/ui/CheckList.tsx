import { Check } from "lucide-react";
import { cls } from "@/lib/utils";

interface CheckListProps {
  items: string[];
  size?: "sm" | "base" | "lg";
  className?: string;
}

const textSizes = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

const CheckList = ({ items, size = "sm", className }: CheckListProps) => (
  <div className={cls("flex flex-col gap-3", className)}>
    {items.map((item) => (
      <div key={item} className="flex items-center gap-3">
        <div className="flex items-center justify-center shrink-0 size-6 bg-[#5BC889]/15 text-[#5BC889] rounded-full">
          <Check className="size-3 text-[#5BC889]" strokeWidth={2.5} />
        </div>
        <span className={cls("leading-snug", textSizes[size])}>{item}</span>
      </div>
    ))}
  </div>
);

export default CheckList;
