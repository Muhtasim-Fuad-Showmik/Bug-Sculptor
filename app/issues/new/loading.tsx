import { Skeleton } from "@/app/components";
import { Button } from "@/components/ui/button";

const LoadingNewIssuePage = () => {
  return (
    <div className="max-w-xl">
      <form className="space-y-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Skeleton />
          <Skeleton />
        </div>
        <div className="grid w-full gap-1.5">
          <Skeleton />
          <Skeleton height="405px" />
        </div>
        <Button className="space-x-3">
          <span>Submit</span>
        </Button>
      </form>
    </div>
  );
};

export default LoadingNewIssuePage;
