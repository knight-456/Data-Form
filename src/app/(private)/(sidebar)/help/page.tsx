"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Book, MessageCircle, FileQuestion } from "lucide-react";
import Link from "next/link";
import { pagesInfo } from "@/utils/pages-info.utils";

export default function HelpCenterPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col items-center justify-center text-center space-y-4 py-8 bg-muted/20 rounded-lg">
        <h2 className="text-3xl font-bold tracking-tight">How can we help?</h2>
        <p className="text-muted-foreground max-w-[600px]">
          Search our knowledge base or get in touch with our support team.
        </p>
        <div className="relative w-full max-w-[500px]">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search for articles..." />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href={pagesInfo.help_center.path + "/documentation"}
          className="block h-full"
        >
          <Card className="h-full hover:border-primary transition-colors cursor-pointer">
            <CardHeader>
              <Book className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Detailed guides and API references.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="px-0">
                Browse Docs &rarr;
              </Button>
            </CardContent>
          </Card>
        </Link>
        <Link
          href={pagesInfo.help_center.path + "/faqs"}
          className="block h-full"
        >
          <Card className="h-full hover:border-primary transition-colors cursor-pointer">
            <CardHeader>
              <FileQuestion className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>FAQ</CardTitle>
              <CardDescription>Answers to common questions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="px-0">
                View FAQs &rarr;
              </Button>
            </CardContent>
          </Card>
        </Link>
        <Link
          href={pagesInfo.help_center.path + "/contact"}
          className="block h-full"
        >
          <Card className="h-full hover:border-primary transition-colors cursor-pointer">
            <CardHeader>
              <MessageCircle className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our team.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="px-0">
                Open Ticket &rarr;
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Popular Articles</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex justify-between items-center border-b pb-4">
            <span className="font-medium">Getting Started Guide</span>
            <Link
              href={
                pagesInfo.help_center.path + "/article/getting-started-guide"
              }
            >
              <Button variant="ghost" size="sm">
                Read
              </Button>
            </Link>
          </div>
          <div className="flex justify-between items-center border-b pb-4">
            <span className="font-medium">Setting up Custom Domains</span>
            <Link
              href={
                pagesInfo.help_center.path +
                "/article/setting-up-custom-domains"
              }
            >
              <Button variant="ghost" size="sm">
                Read
              </Button>
            </Link>
          </div>
          <div className="flex justify-between items-center border-b pb-4">
            <span className="font-medium">Managing Team Roles</span>
            <Link
              href={pagesInfo.help_center.path + "/article/managing-team-roles"}
            >
              <Button variant="ghost" size="sm">
                Read
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
