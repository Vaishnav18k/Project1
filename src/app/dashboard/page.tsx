"use client";
import React from "react";
import { Header } from "@/app/LandingComponent/Header";
import { Footer } from "../LandingComponent/Footer";
import { Howitworks } from "../LandingComponent/Howitworks";
import { Contact } from "../LandingComponent/contact";
export default function dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
     
      <Howitworks />
      <Contact />
      <Footer />
    </div>
  );
}
