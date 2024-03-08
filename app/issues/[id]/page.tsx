import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{issue.title}</CardTitle>
          <CardDescription className="flex space-x-3 text-sm my-2">
            <IssueStatusBadge status={issue.status} />
            <p>{issue.createdAt.toDateString()}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{issue.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
