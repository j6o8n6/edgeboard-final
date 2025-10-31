import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="p-8 flex justify-center">
      <SignIn />
    </div>
  );
}
