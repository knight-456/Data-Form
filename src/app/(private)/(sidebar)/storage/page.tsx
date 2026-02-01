"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Folder,
  FileText,
  FileImage,
  MoreVertical,
  UploadCloud,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-hot-toast";

const files = [
  {
    id: 1,
    name: "Marketing Assets",
    type: "folder",
    size: "230 MB",
    items: "12 files",
  },
  {
    id: 2,
    name: "Project Specs",
    type: "folder",
    size: "45 MB",
    items: "5 files",
  },
  {
    id: 3,
    name: "Q4 Report.pdf",
    type: "file",
    size: "2.4 MB",
    date: "2 days ago",
  },
  {
    id: 4,
    name: "Banner_v2.png",
    type: "image",
    size: "4.1 MB",
    date: "Yesterday",
  },
  {
    id: 5,
    name: "Contract.docx",
    type: "file",
    size: "1.2 MB",
    date: "Just now",
  },
];

export default function StoragePage() {
  const handleAction = (action: string, file: string) => {
    if (action === "Delete") {
      toast.error(`Deleted ${file}`);
    } else {
      toast.success(`${action} ${file}`);
    }
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Storage</h2>
        <Button onClick={() => toast.success("File uploaded successfully!")}>
          <UploadCloud className="mr-2 h-4 w-4" /> Upload File
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {files.map((file) => (
          <Card
            key={file.id}
            className="cursor-pointer hover:border-primary/50 transition-colors"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              {file.type === "folder" ? (
                <Folder className="h-8 w-8 text-blue-500 fill-blue-500/20" />
              ) : file.type === "image" ? (
                <FileImage className="h-8 w-8 text-purple-500" />
              ) : (
                <FileText className="h-8 w-8 text-orange-500" />
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => handleAction("Renamed", file.name)}
                  >
                    Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleAction("Shared", file.name)}
                  >
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-500"
                    onClick={() => handleAction("Delete", file.name)}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="font-semibold truncate">{file.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {file.type === "folder"
                  ? `${file.items} • ${file.size}`
                  : `${file.size} • ${file.date}`}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
