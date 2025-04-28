import { createContext, useContext, useState } from "react";

const CodeFlavorContext = createContext<{
  selectedTab: "_home" | "_about-me" | "_projects";
  setSelectedTab: (tab: "_home") => void;
  tabs: ("_home" | "_about-me" | "_projects")[];
}>({
  selectedTab: "_home",
  setSelectedTab: () => undefined,
  tabs: ["_home", "_about-me", "_projects"],
});

export function CodeFlavorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs: ("_home" | "_about-me" | "_projects")[] = [
    "_home",
    "_about-me",
    "_projects",
  ];
  const [selectedTab, setSelectedTab] = useState<
    "_home" | "_about-me" | "_projects"
  >("_projects");
  return (
    <CodeFlavorContext.Provider value={{ tabs, selectedTab, setSelectedTab }}>
      {children}
    </CodeFlavorContext.Provider>
  );
}

export function useCodeFlavorContext() {
  return useContext(CodeFlavorContext);
}
