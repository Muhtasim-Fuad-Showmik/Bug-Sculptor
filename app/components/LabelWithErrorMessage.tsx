import React from "react";
import { Label } from "@/components/ui/label";
import ErrorMessage from "./ErrorMessage";

const LabelWithErrorMessage = ({
  htmlFor,
  label,
  errorMessage,
}: {
  htmlFor: string;
  label: String;
  errorMessage: String | undefined;
}) => {
  return (
    <div className="flex items-center h-4 space-x-3">
      <Label htmlFor={htmlFor}>{label}</Label>
      <ErrorMessage>{errorMessage ? errorMessage : ""}</ErrorMessage>
    </div>
  );
};

export default LabelWithErrorMessage;
