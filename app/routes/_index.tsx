import type { V2_MetaFunction } from "@remix-run/node";
import { Link }                 from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "QuickSys Mediate" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white">
      <nav className="flex items-center justify-between p-6 bg-blue-500">
        <div className="text-white font-semibold text-lg">QuickSys Mediate</div>
        <div className="space-x-4">
          {
            user ? (
              <Link
                to="/dashboard"
                className="text-white hover:underline"
              >
                Welcome Back, {user.email}
              </Link>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="text-white hover:underline"
                >
                  Join Us
                </Link>
                <Link
                  to="/login"
                  className="text-white hover:underline"
                >
                  Log In
                </Link>
              </>
            )}
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center h-screen">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-700">Manage Your Mediation Business with Ease</h1>
          <p className="mt-4 text-lg text-gray-500">Our platform provides all the tools you need to run a successful
            mediation business, whether you're a solo practitioner or part of a small team.</p>
        </section>
      </div>
    </main>
  );
}
