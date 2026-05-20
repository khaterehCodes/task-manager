'use client'
import AccountInformation from "./(components)/AccountInformation";
import Setting from "./(components)/Setting";
import UserInformation from "./(components)/UserInformation";
import { useProfileNav } from "./context/ProfileContext";

function Profile() {
  const { selectedNav } = useProfileNav();
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[88%] h-auto">
      {selectedNav === 1 && <UserInformation />}
      {selectedNav === 2 && <AccountInformation />}
      {selectedNav === 3 && <Setting />}
        </div>
    </div>
  );
}

export default Profile;
