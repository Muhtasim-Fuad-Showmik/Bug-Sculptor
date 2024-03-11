import { Button } from "@/components/ui/button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueFormSkeleton = () => {
  return (
    <div className="max-w-xl">
      <form className="space-y-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Skeleton height="2rem" />
          <Skeleton height="2rem" />
        </div>
        <div className="grid w-full gap-1.5">
          <Skeleton height="2rem" />
          <Skeleton height="405px" />
        </div>
        <Button className="space-x-3">
          <span>Submit</span>
        </Button>
      </form>
    </div>
  );
};

export default IssueFormSkeleton;
