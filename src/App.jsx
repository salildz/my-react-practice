import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import profilePic from "./assets/profile.jpg";

function App() {
  return (
    <>
      <Header />
      <Card src={profilePic} title="Umutsuz Ev Adamları" description="Ankara" />
      <Footer />
    </>
  );
}

export default App;
