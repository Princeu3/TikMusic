import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AppLayout from "../../components/shared/AppLayout";

export default async function FeedPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }

  return (
    <AppLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Feed</h1>
        {/* We'll add the video feed here later */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {/* Video feed placeholder */}
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 