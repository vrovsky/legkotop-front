import CategorySelector from "./Components/CategorySelector";
import CoursesAndWebinars from "./Components/CoursesAndWebinars";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import RecommendedContent from "./Components/RecommendedContent";
import TestimonialsSection from "./Components/TestimonialsSection";
import VisualTopics from "./Components/VisualTopics";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <VisualTopics />
      <CategorySelector />
      <RecommendedContent />
      <CoursesAndWebinars />
      <TestimonialsSection />
    </>
  );
}

export default App;
