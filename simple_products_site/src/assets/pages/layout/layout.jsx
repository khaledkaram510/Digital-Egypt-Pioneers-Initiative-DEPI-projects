import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { Outlet } from "react-router-dom"; // Import the Outlet component from react-router-dom

export default function Layout() {
  return(
    <>
      <Header />
      <Outlet />  {/* new The Outlet component is used to render the child routes */}
      <Footer />
    </>
  )
}