import { Button } from "@/components/ui/button";
import Link from "next/link";

const IssueToolbar = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/issues/new">+ Create</Link>
      </Button>
    </div>
  );
};

export default IssueToolbar;
