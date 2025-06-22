'use client';
import React from 'react'
import { useUser } from "@stackframe/stack";
import { UserButton } from "@stackframe/stack";
import { useRouter } from "next/navigation";


import {
  Scale,
  User,
  Mail,
  Search,
  CircleAlert,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";

export function Header() {
    const user = useUser();
      const router = useRouter();
       const handleSignInClick = () => {
        router.push('/signin');
        router.push('/home');
        router.push('/dashboard')
      };
  return (
   
      <header className="bg-white  border-border sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-black p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <Link
                href="/home"
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                Case Alert System
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="/home"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
                
                <UserButton />
              </nav>
              <div className="flex items-center space-x-3">
                {!user && (
                  <Link
                    href="/signout"
                    className="flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-black text-slate-50 hover:bg-slate-800 h-9 rounded-md px-3 space-x-2"
                  >
                    <User className="h-4 w-4" />
                    <span>Sign In</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>
  )
}

