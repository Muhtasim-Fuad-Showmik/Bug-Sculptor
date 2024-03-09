import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <div className="flex items-center space-x-1 text-sm text-red-700">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
};

export default ErrorMessage;
