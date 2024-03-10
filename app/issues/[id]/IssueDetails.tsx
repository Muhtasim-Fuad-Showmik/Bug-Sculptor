import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Issue } from "@prisma/client";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{issue.title}</CardTitle>
        <CardDescription className="flex space-x-3 text-sm my-2">
          <IssueStatusBadge status={issue.status} />
          <div>{issue.createdAt.toDateString()}</div>
        </CardDescription>
      </CardHeader>
      <CardContent className="prose max-w-full">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </CardContent>
    </Card>
  );
};

export default IssueDetails;
