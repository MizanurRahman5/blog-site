// app/profile.js
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';


const Profile = async () => {
  // KindeAuth থেকে user ডেটা ফেচ করা হচ্ছে
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // যদি user না থাকে, তাহলে login পেজে রিডাইরেক্ট হবে
  if (!user) {
    redirect('/login'); // এখানে '/login' হল লগইন পেজের রুট
  }

  return (
    <div className="min-h-screen">
     

      {/* Profile Data */}
      <div className="container mx-auto text-center mt-20">
        <h1 className="text-3xl font-semibold">Welcome to your Profile!</h1>
        <div className="mt-6">
          {user ? (
            <div>
              <p>
                <strong>Name:</strong> {user.given_name + ' ' + user.family_name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              {/* অন্যান্য তথ্য এখানে যোগ করা যাবে */}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
