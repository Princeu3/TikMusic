import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AppLayout from "../../components/shared/AppLayout";

export default async function ProfilePage() {
  // Get the full user object from Clerk
  const user = await currentUser();
  
  if (!user) {
    redirect("/");
  }

  return (
    <AppLayout>
      <div className="p-8">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-4">
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-600">{user.emailAddresses[0].emailAddress}</p>
            </div>
          </div>
          
          {/* We'll add the video grid here later */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            {/* Video grid placeholder */}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}