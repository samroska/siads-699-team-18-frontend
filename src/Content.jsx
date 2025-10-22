import { useState } from "react";
import UserContent from "./UserContent";
import DoctorContent from "./DoctorContent";

function Content({ userTypeDefault = "user" }) {
  const [userType, setUserType] = useState(userTypeDefault); // "doctor" or "user"

  const handleTabChange = (event, newValue) => {
    setUserType(newValue);
  };

  // Render the appropriate component based on userType
  if (userType === 'doctor') {
    return <DoctorContent />;
  } else {
    return <UserContent />;
  }
}
export default Content;