"use client";

import React from 'react';
import Link from 'next/link';
import { Rocket, ArrowRight, Sparkles, Palette } from 'lucide-react';

import { Button } from '@/components/ui/button';

const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-brand-gradient opacity-5" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-brand/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-info/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-4 bg-brand-gradient rounded-2xl shadow-lg">
                        <Rocket className="w-10 h-10 text-white" />
                    </div>
                </div>

                {/* Hero Text */}
                <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 text-foreground">
                    Beyond The Limits
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mb-8">
                    Your unified platform for limitless possibilities
                </p>

                {/* Tagline */}
                <div className="flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full mb-12">
                    <Sparkles className="w-4 h-4 text-brand" />
                    <span className="text-sm font-medium text-brand">One platform, infinite solutions</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/login">
                        <Button variant="brand" size="lg" className="group h-14 px-8 text-lg">
                            Get Started
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button variant="brand-outline" size="lg" className="h-14 px-8 text-lg">
                            Go to Dashboard
                        </Button>
                    </Link>
                </div>

                {/* Settings Link */}
                <div className="mt-8">
                    <Link href="/settings/theme">
                        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-brand">
                            <Palette className="w-4 h-4" />
                            Customize Theme
                        </Button>
                    </Link>
                </div>

                {/* Products Preview */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground mb-4">Explore our ecosystem</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: 'Products', emoji: '📦' },
                            { name: 'Docs', emoji: '📄' },
                            { name: 'Drive', emoji: '☁️' },
                            { name: 'Analytics', emoji: '📊' },
                            { name: 'AI', emoji: '🤖' },
                            { name: 'Commerce', emoji: '🛒' },
                        ].map((product) => (
                            <span 
                                key={product.name}
                                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-brand hover:text-brand transition-all cursor-pointer"
                            >
                                {product.emoji} {product.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;