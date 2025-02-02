import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AppLayout from "../../components/shared/AppLayout";

/**
 * ProfilePage - Displays the user's profile page.
 * Redirects to the home page if the user is not authenticated.
 */
export default async function ProfilePage() {
  // Get the full user object from Clerk
  const user = await currentUser();

  // If user is not authenticated, redirect to the home page
  if (!user) {
    redirect("/");
    return null; // Ensure the function exits after redirection
  }

  // Render the profile page layout with user information
  return (
    <AppLayout>
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            {/* User profile image */}
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className="w-20 h-20 rounded-full"
            />
            <div>
              {/* User name */}
              <h2 className="text-2xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              {/* User email address */}
              <p className="text-gray-600">{user.emailAddresses[0].emailAddress}</p>
              {/* User username */}
              <p className="text-gray-500">@{user.username}</p>
            </div>
          </div>

          {/* User bio */}
          <div className="mt-4">
            <h3 className="text-lg font-medium">Bio</h3>
            <p className="text-gray-700">{user.bio || "This user has not provided a bio."}</p>
          </div>

          {/* Placeholder for future video grid */}
          <div className="mt-8">
            <h3 className="text-lg font-medium">Recent Activities</h3>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {/* Video grid placeholder */}
              <div className="col-span-4 text-center text-gray-500">
                No recent activities to display.
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
