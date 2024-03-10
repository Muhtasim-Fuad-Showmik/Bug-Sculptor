import IssueStatusBadge from "@/app/components/IssueStatusBadge";
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

/**
 * Next JS automatically considers pages without parameters in their routes
 * to be static and therefore statically builds the page at build time on
 * the server side (Server-side caching).
 *
 * We can reconfigure that using route segment configs as shown below.
 * YOu can learn more about it from the following URL:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
 */
// Forces dynamic generation of the page on request time
export const dynamic = "force-dynamic";
// Forces revalidation of a generated page after each interval of the specified duration in seconds
// export const revalidate = 0;

export default IssuesPage;
