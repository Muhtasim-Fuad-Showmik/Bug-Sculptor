import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoadingIssueDetailsPage = () => {
  return (
    <div className="max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton />
          </CardTitle>
          <CardDescription className="flex space-x-3 text-sm my-2">
            <Skeleton width="5rem" />
            <Skeleton width="8rem" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton count={3} />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingIssueDetailsPage;
