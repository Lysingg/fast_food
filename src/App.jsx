import Menu from "./components/Menu"
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Category from "./components/Category";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCard />
      <Menu/>
      <Category/>
    </div>
  );
};

export default App;
