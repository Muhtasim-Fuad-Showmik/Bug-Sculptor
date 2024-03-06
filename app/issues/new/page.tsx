"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const NewIssuePage = () => {
  return (
    <form className="space-y-3">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="Title" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="description">Your description</Label>
        <Textarea placeholder="Type your description here." id="description" />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default NewIssuePage;
