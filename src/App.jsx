import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import profilePic from "./assets/profile.jpg";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Header />
      <Card src={profilePic} title="Umutsuz Ev Adamları" description="Ankara" />
      <Button />
      <Student name="Salih Yıldız" age={21} isStudent={true}/>
      <Student name="Beyza NA" age={20} isStudent={true}/>
      <Student name="Leyla" age={8} isStudent={false}/>
      <Student />
      <Footer />
    </>
  );
}

export default App;
