
'use client';
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SignIn } from "@stackframe/stack";
import { Footer } from "./LandingComponent/Footer";
import { Contact } from "./LandingComponent/contact";
import './globals.css';
import {
  Scale, User, Mail, Search, CircleAlert,
    MessageCircle, Linkedin, Github 
} from "lucide-react";
import Link from "next/link"
import { Howitworks } from "./LandingComponent/Howitworks";

export default function Home() {
  const user = useUser();
  const router = useRouter();
 const handleSignInClick = () => {
    router.push('/signin');
  };


  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  if (user === undefined) {
    return (
      // <div className="flex justify-center items-center h-screen">
      //   <div className="animate-pulse flex space-x-4">
      //     <div className="rounded-full bg-blue-500 h-12 w-12"></div>
      //   </div>
      // </div>
      <>
      </>
    );
  }
  return (
    // <div className="md:container md:mx-auto p-4">
    //   <h1 className="text-3xl font-bold mb-8 text-gray-800">Home</h1>
      
    //   {/* Glassmorphism SignUp Card */}
    //    <div className="max-w-md mx-auto bg-blue-50/50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden p-8 border border-blue-200">
    //     <SignIn />
    //   </div>
    // </div>

<div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white  border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-black p-2 rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Case Alert System
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link href="#hero" className="text-gray-600 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-black transition-colors">
                How It Works
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
                Contact Us
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              {!user && (
                <Link 
                  href="/signin"
                  className="flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-black text-white hover:bg-primary/90 h-9 rounded-md px-3 space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>

                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">

                <h1 className="text-4xl  md:text-5xl font-bold text-foreground leading-tight">
                  Get Notified When Your Case Is Listed
                </h1>
                <p className="text-lg text-slate-500">
                  Case Alert System automatically checks the Delhi High Court cause list and sends you an email when your name appears. Never miss an important court date again.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-center text-slate-500 mb-4">
                  Sign in to set up your case alerts and never miss a court date.
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-black hover:bg-primary/90 text-white font-medium py-3 h-10 px-4 w-full"
                >
                  Sign In to Get Started
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Case Alert</h3>
                      <p className="text-sm text-muted-foreground">Delhi High Court</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground">Your case has been listed:</p>
                    <p className="text-xs text-slate-500">Case No: CRL.A. 1234/2024</p>
                    <p className="text-xs text-slate-500">Date: Tomorrow, 10:30 AM</p>
                    <p className="text-xs text-slate-500">Courtroom: 15</p>
                    <p className="text-xs text-slate-500">Judge: Hon'ble Mr. Justice XYZ</p>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <CircleAlert className="h-4 w-4 text-orange-500" />
                    <span className="text-xs text-orange-600">Urgent: Court appearance required</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  New
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* How It Works */}
 <Howitworks />
 {/* <SignIn /> */}
        {/* ... (Keep the same structure as your HTML) ... */}
      

      {/* Contact Section */}
    <Contact />
        {/* ... (Keep the same structure as your HTML) ... */}

      {/* Footer */}
      <Footer />
        {/* ... (Keep the same structure as your HTML) ... */}
        
    
</div>




  );
}

