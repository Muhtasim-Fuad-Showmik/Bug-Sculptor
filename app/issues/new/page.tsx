"use client";

import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Alert variant="destructive" className="mb-5">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occured.");
          }
        })}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <div className="flex items-center h-4 space-x-3">
            <Label htmlFor="title">Title</Label>
            {errors.title && (
              <div className="flex items-center space-x-1 text-sm text-red-700">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <span>{errors.title.message}</span>
              </div>
            )}
          </div>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            {...register("title")}
          />
        </div>
        <div className="grid w-full gap-1.5">
          <div className="flex items-center h-4 space-x-3">
            <Label htmlFor="description">Your description</Label>
            {errors.description && (
              <div className="flex items-center space-x-1 text-sm text-red-700">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <span>{errors.description.message}</span>
              </div>
            )}
          </div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Type your description here." {...field} />
            )}
          />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
