import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { settingsOptions } from "./data";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your application settings and preferences.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {settingsOptions.map((option) => (
          <Link key={option.href} href={option.href} className="block group">
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <option.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {option.title}
                  </CardTitle>
                </div>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
