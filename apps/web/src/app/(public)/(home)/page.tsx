"use client";

import React from 'react';
import Link from 'next/link';
import {
    Rocket,
    ArrowRight,
    Sparkles,
    Package,
    FileText,
    Cloud,
    BarChart3,
    Bot,
    ShoppingCart,
    CheckCircle2
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--brand),0.1),rgba(255,255,255,0))]" />

            {/* Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-info/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-4">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 text-brand text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Future of Productivity</span>
                </div>

                {/* Hero Text */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight mb-6 text-foreground max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                    Beyond The <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-info">
                        Limits
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    One unified ecosystem. Infinite possibilities. <br className="hidden md:block" />
                    Seamlessly integrate your workflow with our suite of powerful tools.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Link href="/login">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-brand hover:bg-brand-dark shadow-lg shadow-brand/25 group">
                            Get Started
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-border/50 hover:bg-secondary/50 backdrop-blur-sm">
                            Live Demo
                        </Button>
                    </Link>
                </div>

                {/* Ecosystem Grid */}
                <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { name: 'Products', icon: Package, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                            { name: 'Docs', icon: FileText, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                            { name: 'Drive', icon: Cloud, color: 'text-sky-500', bg: 'bg-sky-500/10' },
                            { name: 'Analytics', icon: BarChart3, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                            { name: 'AI', icon: Bot, color: 'text-pink-500', bg: 'bg-pink-500/10' },
                            { name: 'Commerce', icon: ShoppingCart, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-brand/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features List */}
                <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl text-center">
                    {[
                        { title: "Secure by Default", desc: "Enterprise-grade security with advanced encryption and role-based access." },
                        { title: "Lightning Fast", desc: "Built on Next.js 14 and Turbopack for instantaneous page loads." },
                        { title: "Fully Customizable", desc: "Adapt the platform to your brand with our powerful theming engine." }
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className="p-2 rounded-full bg-brand/10 text-brand mb-2">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <h3 className="font-semibold text-lg">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HomePage;