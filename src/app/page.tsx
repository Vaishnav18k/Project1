
'use client';
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SignIn } from "@stackframe/stack";

export default function Home() {
  const user = useUser();
  const router = useRouter();

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
    <div className="md:container md:mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Home</h1>
      
      {/* Glassmorphism SignUp Card */}
       <div className="max-w-md mx-auto bg-blue-50/50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden p-8 border border-blue-200">
        <SignIn />
      </div>
    </div>
  );
}

