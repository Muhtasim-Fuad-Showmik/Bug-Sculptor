import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

/**
 * Creates a new issue using the data provided
 * ! Issue is created only for valid data
 *
 * @param request containing data for the issue to be created
 * @returns newly created issue
 */
export async function POST(request: NextRequest) {
  // Retrieve the data body for creating a new issue
  const body = await request.json();

  // Validate the retrieved data for the issue model
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Create a new issue in the database
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  // Return the new created issue
  return NextResponse.json(newIssue, { status: 201 });
}
