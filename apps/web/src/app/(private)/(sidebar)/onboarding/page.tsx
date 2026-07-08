"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const steps = [
  {
    id: 1,
    title: "Create your account",
    description: "You've successfully signed up.",
    completed: true,
  },
  {
    id: 2,
    title: "Verify email address",
    description: "Check your inbox for a verification link.",
    completed: true,
  },
  {
    id: 3,
    title: "Complete your profile",
    description: "Upload an avatar and add your role.",
    completed: false,
  },
  {
    id: 4,
    title: "Create your first project",
    description: "Set up a new workspace.",
    completed: false,
  },
  {
    id: 5,
    title: "Invite team members",
    description: "Collaborate with your colleagues.",
    completed: false,
  },
];

export default function OnboardingPage() {
  const [progress, setProgress] = useState(40);

  const handleAction = (stepId: number) => {
    toast("Redirecting to action...");
  };

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to SaaS Platform
        </h1>
        <p className="text-xl text-muted-foreground">
          Let's get you set up for success.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-end mb-2">
            <CardTitle>Your Progress</CardTitle>
            <span className="text-sm font-medium text-muted-foreground">
              {progress}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {steps.map((step) => (
          <Card
            key={step.id}
            className={`transition-opacity ${step.completed ? "opacity-60 bg-muted/50" : "opacity-100 border-primary/20"}`}
          >
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {step.completed ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : (
                  <Circle className="h-6 w-6 text-muted-foreground" />
                )}
                <div>
                  <h3
                    className={`font-semibold ${step.completed ? "line-through text-muted-foreground" : ""}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              {!step.completed && (
                <Button size="sm" onClick={() => handleAction(step.id)}>
                  Start <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
