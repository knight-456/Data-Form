"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Mail, Phone, Calendar, Check, Send, Sparkles } from "lucide-react";
import { profile } from "../data";

type TQuickConnectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const roleOptions = [
  "Senior Frontend Engineer (React/Next)",
  "Senior React Native Mobile Developer",
  "Full Stack / Lead Developer",
  "Mobile Architecture Audit",
];

export function QuickConnectModal({ isOpen, onClose }: TQuickConnectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedRole, setSelectedRole] = useState(roleOptions[0]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mailToUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Hiring Inquiry: ${selectedRole}`
  )}&body=${encodeURIComponent(
    `Hi Jashwant,\n\nWe came across your portfolio and would like to discuss a ${selectedRole} opportunity.\n\nBest regards,`
  )}`;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Window */}
      <div className="relative z-10 w-full max-w-lg bg-card text-card-foreground border border-border/80 rounded-[28px] p-6 shadow-[0_0_80px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border/50 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-brand text-primary-foreground font-black text-base shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight text-foreground">Schedule 15-Min Intro Chat</h2>
              <p className="text-xs font-semibold text-muted-foreground">Direct connection with Jashwant Rana</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Selector */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Select Role / Discussion Focus:
          </label>
          <div className="grid gap-2">
            {roleOptions.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setSelectedRole(role)}
                className={`p-3 rounded-xl text-xs font-bold text-left transition-all cursor-pointer flex items-center justify-between ${
                  selectedRole === role
                    ? "bg-brand/10 border border-brand text-brand shadow-sm"
                    : "bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{role}</span>
                {selectedRole === role && <Check className="w-4 h-4 text-brand" />}
              </button>
            ))}
          </div>
        </div>

        {/* Direct Action Controls */}
        <div className="space-y-3 mb-6">
          <a
            href={mailToUrl}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold bg-brand text-primary-foreground shadow-lg transition-all hover:bg-brand/90 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Open Pre-filled Email Draft
          </a>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-muted/80 text-foreground border border-border/60 hover:bg-muted transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-brand" />
              <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
            </button>

            <button
              type="button"
              onClick={copyPhone}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-muted/80 text-foreground border border-border/60 hover:bg-muted transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-brand" />
              <span>{copiedPhone ? "Phone Copied!" : "Copy Phone"}</span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand" />
            <span>Response time: &lt;2 hours</span>
          </div>
          <span>Dehradun / Remote</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
