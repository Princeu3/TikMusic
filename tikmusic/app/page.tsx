import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <div className="inline-block border-2 rounded-lg text-center">
          <h1 className="text-4xl font-bold leading-tight px-3 py-1">TikMusic</h1>
        </div>
        <p className="mt-4 text-gray-600 text-center">Welcome to the Tiktok Clone, Share and Watch Small Videos</p>
      </div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Login/Sign-up</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </main>
  );
}
