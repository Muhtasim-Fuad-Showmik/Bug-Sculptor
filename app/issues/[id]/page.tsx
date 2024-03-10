import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  // Redirect users to the "Not Found" page for invalid query parameters for the ID
  if (isNaN(parseInt(params.id))) notFound();

  // Get the issue from the database the ID of which has been
  // specified in the URL parameters to hit this page.
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  // Return not found page for any non-existent issue
  if (!issue) notFound();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="max-w-3xl">
        <IssueDetails issue={issue} />
      </div>
      <div>
        <EditIssueButton issueId={issue.id} />
      </div>
    </div>
  );
};

export default IssueDetailPage;
