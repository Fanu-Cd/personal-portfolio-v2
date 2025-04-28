import { useCodeFlavorContext } from "@/app/contexts/use-code-flavor-context";
import _Home from "./_home";
import _AboutMe from "./_about-me";
import _Projects from "./_projects";
const Main = () => {
  const { selectedTab } = useCodeFlavorContext();

  return selectedTab === "_home" ? (
    <_Home />
  ) : selectedTab === "_about-me" ? (
    <_AboutMe />
  ) : selectedTab === "_projects" ? (
    <_Projects />
  ) : null;
};

export default Main;
