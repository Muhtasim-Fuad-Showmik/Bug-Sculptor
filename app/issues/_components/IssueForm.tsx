"use client";

import LabelWithErrorMessage from "@/app/components/LabelWithErrorMessage";
import Loader from "@/app/components/Loader";
import { issueSchema } from "@/app/validationSchemas";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (issue) axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occured.");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Alert variant="destructive" className="mb-5">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <LabelWithErrorMessage
            htmlFor="title"
            label="Title"
            errorMessage={errors.title?.message}
          />
          <Input
            defaultValue={issue?.title}
            type="text"
            id="title"
            placeholder="Title"
            {...register("title")}
          />
        </div>
        <div className="grid w-full gap-1.5">
          <LabelWithErrorMessage
            htmlFor="description"
            label="Description"
            errorMessage={errors.description?.message}
          />
          <Controller
            name="description"
            control={control}
            defaultValue={issue?.description}
            render={({ field }) => (
              <SimpleMDE placeholder="Type your description here." {...field} />
            )}
          />
        </div>
        <Button className="space-x-3" disabled={isSubmitting}>
          <span>{issue ? "Update" : "Submit"}</span>
          {isSubmitting && <Loader size="12" stroke="2" />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
