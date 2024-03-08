import React from "react";
import { Status } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

const statusMap: Record<Status, { label: string; bgClass: string }> = {
  OPEN: { label: "Open", bgClass: "bg-red-600" },
  IN_PROGRESS: { label: "In Progress", bgClass: "bg-indigo-600" },
  CLOSED: { label: "Closed", bgClass: "bg-emerald-600" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge className={statusMap[status].bgClass}>
      {statusMap[status].label}
    </Badge>
  );
};

export default IssueStatusBadge;
