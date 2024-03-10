import { Button } from "@/components/ui/button";
import Link from "next/link";

const IssueToolbar = () => {
  return (
    <div className="mb-5">
      <Link href="/issues/new">
        <Button>+ Create</Button>
      </Link>
    </div>
  );
};

export default IssueToolbar;
