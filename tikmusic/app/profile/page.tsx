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
      <div className="p-8">
        <div className="max-w-2xl">
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
            </div>
          </div>
          
          {/* Placeholder for future video grid */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            {/* Video grid placeholder */}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
