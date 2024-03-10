import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button className="space-x-1">
        <Pencil1Icon />
        Edit
      </Button>
    </Link>
  );
};

export default EditIssueButton;
