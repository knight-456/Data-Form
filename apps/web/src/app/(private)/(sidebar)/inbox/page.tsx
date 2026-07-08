"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";

const initialThreads = [
  {
    id: 1,
    user: "Alice Smith",
    subject: "Project Update",
    preview: "Hey, just wanted to check in on...",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    user: "Support Team",
    subject: "Ticket #1234 Resolved",
    preview: "Your issue has been fixed.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    user: "John Doe",
    subject: "Meeting Notes",
    preview: "Here are the notes from...",
    time: "2 days ago",
    unread: false,
  },
];

export default function InboxPage() {
  const [threads, setThreads] = useState(initialThreads);
  const [selectedThread, setSelectedThread] = useState(threads[0]);
  const [message, setMessage] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setThreads(
      initialThreads.filter(
        (t) =>
          t.user.toLowerCase().includes(query) ||
          t.subject.toLowerCase().includes(query),
      ),
    );
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    toast.success("Reply sent!");
    setMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] p-4 gap-4">
      {/* Thread List */}
      <Card className="w-1/3 flex flex-col">
        <div className="p-4 border-b space-y-2">
          <h2 className="text-xl font-bold">Inbox</h2>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-8"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className={cn(
                "flex flex-col gap-1 p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors",
                selectedThread.id === thread.id && "bg-muted",
              )}
              onClick={() => setSelectedThread(thread)}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn("font-medium", thread.unread && "font-bold")}
                >
                  {thread.user}
                </span>
                <span className="text-xs text-muted-foreground">
                  {thread.time}
                </span>
              </div>
              <span className={cn("text-sm", thread.unread && "font-bold")}>
                {thread.subject}
              </span>
              <span className="text-xs text-muted-foreground line-clamp-1">
                {thread.preview}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Message View */}
      <Card className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{selectedThread.user[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{selectedThread.subject}</div>
              <div className="text-xs text-muted-foreground">
                From: {selectedThread.user}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback>{selectedThread.user[0]}</AvatarFallback>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                <p>Hi there,</p>
                <p className="mt-2">
                  {selectedThread.preview} the status of the deployment. Is
                  everything on track?
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
              <Avatar className="w-8 h-8 bg-primary text-primary-foreground">
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <div className="bg-primary text-primary-foreground p-3 rounded-lg text-sm max-w-[80%]">
                <p>Hey! Yes, we are pushing to production tonight.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <form className="flex gap-2" onSubmit={handleSend}>
            <Textarea
              placeholder="Type your reply..."
              className="min-h-[60px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button size="icon" type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
