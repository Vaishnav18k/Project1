import React from "react";
import "@/app/globals.css";
export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Have questions about our service? Need help with your account? We're
            here to assist you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-lg border border-gray-300/60 bg-white   text-card-white shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
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
                  className="lucide lucide-message-circle h-5 w-5"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <span>Send us a Message</span>
              </h3>
              <p className="text-sm text-slate-500">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="p-6 pt-0">
              <form className="space-y-4">
                {/* Name Input */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="contact-name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="contact-name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="contact-email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="contact-email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="contact-message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black text-white hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-300/60 bg-white text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
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
                    className="lucide lucide-mail h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>Email Support</span>
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-slate-500 mb-2">
                  For technical support or general inquiries:
                </p>
                <a
                  href="mailto:support@casealertsystem.com"
                  className="text-primary hover:underline font-medium"
                >
                  support@casealertsystem.com
                </a>
                <p className="text-sm text-slate-500 mt-2">
                  Response time: Within 24 hours
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-300/60 bg-white text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    How often do you check the cause list?
                  </h4>
                  <p className="text-sm text-slate-500">
                    We check the high court cause list every morning at 6:00 AM.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Is my data secure?
                  </h4>
                  <p className="text-sm text-slate-500">
                    Yes, we use industry-standard encryption and never share
                    your information.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Is the service free?
                  </h4>
                  <p className="text-sm text-slate-500">
                    Yes, our basic alert service is completely free for all
                    advocates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
