import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button className="bg-destructive space-x-1 flex items-center w-full">
        <TrashIcon />
        <p>Delete Issue</p>
      </Button>
    </Link>
  );
};

export default DeleteIssueButton;
