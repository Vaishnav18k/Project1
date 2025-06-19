import React from "react";
import "@/app/globals.css";

export function Howitworks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our automated system ensures you never miss an important court date.
            Here's how we keep you informed.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative text-center group hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="relative mx-auto mb-4">
                <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-plus h-8 w-8 text-primary-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" x2="19" y1="8" y2="14"></line>
                    <line x1="22" x2="16" y1="11" y2="11"></line>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  01
                </div>
              </div>
              <h3 className="font-semibold tracking-tight text-xl mb-2">
                Enter Your Details
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">
                Provide your name and email address to get started with our case
                monitoring service.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-blue-300"></div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative text-center group hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="relative mx-auto mb-4">
                <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search h-8 w-8 text-primary-foreground"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  02
                </div>
              </div>
              <h3 className="font-semibold tracking-tight text-xl mb-2">
                We Monitor Daily
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">
                Our system automatically scans the latest high court cause list
                every morning for your name.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-blue-300"></div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative text-center group hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="relative mx-auto mb-4">
                <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail h-8 w-8 text-primary-foreground"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  03
                </div>
              </div>
              <h3 className="font-semibold tracking-tight text-xl mb-2">
                Instant Alerts
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">
                If your name appears in the cause list, you'll receive an
                immediate email with case details.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Reliable &amp; Secure
          </h3>
          <p className="text-muted-foreground">
            Your data is protected with industry-standard security measures. We
            only use your information to provide case alerts and never share it
            with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}