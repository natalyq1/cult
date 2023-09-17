import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"
import ProfileClient from "../../../components/Sesion/Profile/Client/ProfileClient";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <ProfileClient />
      <Footer />
    </div>
  )
}

export default ProfilePage