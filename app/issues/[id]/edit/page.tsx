import { notFound } from "next/navigation";
import prisma from "@/prisma/client";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
});

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  // FInd the issue to be edited
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  // Redirect the user to the "Not Found" page if
  // no issue with the same ID is found
  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
