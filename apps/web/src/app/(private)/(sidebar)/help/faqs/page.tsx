"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SettingsHeader } from "@/components/settings/settings-header";

export default function FAQPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Frequently Asked Questions"
        description="Answers to common questions and troubleshooting tips."
      />

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I reset my password?</AccordionTrigger>
            <AccordionContent>
              You can reset your password by going to the Login page and
              clicking on the "Forgot Password" link. Follow the instructions
              sent to your email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I change my billing plan?
            </AccordionTrigger>
            <AccordionContent>
              Navigate to Settings / Billing. From there you can upgrade,
              downgrade, or cancel your current subscription plan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I invite users outside my organization?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can invite guest users with limited permissions. Go to
              the Team page and select "Invite Guest" from the actions menu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Where can I find my API keys?</AccordionTrigger>
            <AccordionContent>
              API keys are located in Settings / Developers. Make sure to keep
              your keys secure and never share them publicly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
