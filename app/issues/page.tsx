import { IssueStatusBadge } from "@/app/components";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma/client";
import Link from "next/link";
import IssueToolbar from "./IssueToolbar";

// Uncomment to delay load time and view the skeleton loading screen
// import delay from "delay";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  // Uncomment to delay load time and view the skeleton loading screen
  // await delay(2000);

  return (
    <div>
      <IssueToolbar />
      <Table>
        <TableCaption>A list of your tracked issues.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Issue</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell className="font-bold">
                <Link href={`/issues/${issue.id}`} className="link">
                  {issue.title}
                </Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IssuesPage;
