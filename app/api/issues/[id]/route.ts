import { issueSchema } from "@/app/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Retrieve data from the request body
  const body = await request.json();

  // Use zod schema to validate the retrieved issue data
  // and throw an error for invalid issue data
  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  // Find the issue specified by the id parameter
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  // If no issue with the provided id is found, thrown "Invalid Issue" error
  if (!issue)
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 });

  // Otherwise, update the issue found
  const updatedIssue = await prisma.issue.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  // Return the updated issue as a response
  return NextResponse.json(updatedIssue);
}
