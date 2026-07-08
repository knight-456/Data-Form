"use client";

import React from "react";
import { SettingsHeader } from "@/components/settings/settings-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, User, Calendar } from "lucide-react";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const title = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Article Not Found";

  return (
    <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      <SettingsHeader title={title} description="Knowledge Base Article" />

      <div className="flex items-center gap-4 text-sm text-muted-foreground border-b pb-4">
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>Written by Support Team</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>Updated 2 days ago</span>
        </div>
        <Badge variant="secondary">Documentation</Badge>
      </div>

      <article className="prose prose-slate dark:prose-invert max-w-none space-y-4">
        <p className="lead text-lg">
          This is a placeholder for the article content corresponding to{" "}
          <strong>{title}</strong>. In a real application, this content would be
          fetched from a CMS or database.
        </p>
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h3>Step-by-Step Guide</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Navigate to the configuration settings.</li>
          <li>Select the appropriate option from the dropdown menu.</li>
          <li>Click "Save Changes" to apply your settings.</li>
          <li>Verify the changes in the preview window.</li>
        </ol>
        <div className="bg-muted p-4 rounded-lg my-4 border-l-4 border-primary">
          <strong>Note:</strong> Make sure you have the necessary permissions to
          perform these actions.
        </div>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </article>

      <div className="flex flex-col gap-4 mt-8 pt-8 border-t">
        <h4 className="font-semibold">Was this article helpful?</h4>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <ThumbsUp className="h-4 w-4" /> Yes
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ThumbsDown className="h-4 w-4" /> No
          </Button>
        </div>
      </div>
    </div>
  );
}
