import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

export default function Handler(props: unknown) {
  return (
           <div className="max-w-md mx-auto bg-blue-50/50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-blue-200">

  <StackHandler fullPage app={stackServerApp} routeProps={props} />
    </div>
  );
}
