import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Page() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  return (
    <div className="mt-8 p-8 border rounded text-center">
      <div className="mx-auto mb-3 w-fit rounded-xl bg-gray-100 p-3">🔒</div>
      <div className="text-lg font-semibold">Owner (signed-in users only)</div>
      <div className="mt-1 text-gray-600 text-sm">
        This will show GMV and platform split after we add the database.
      </div>
    </div>
  );
}
