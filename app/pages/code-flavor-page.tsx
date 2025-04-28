import { Container } from "@mantine/core";
import Header from "../components/code_flavor/header";
import Main from "../components/code_flavor/main";
import Footer from "../components/code_flavor/footer";
import { CodeFlavorProvider } from "../contexts/use-code-flavor-context";

const CodeFlavorPage = () => {
  const colors = {
    main_bg: "bg-slate-800",
  };

  return (
    <CodeFlavorProvider>
      <Container
        fluid
        className={`w-full flex flex-col min-h-screen ${colors.main_bg} !p-0`}
      >
        <header className="min-h-[5rem] !p-2">
          <Header />
        </header>
        <main className="flex-grow">
          <Main />
        </main>
        <footer className="min-h-[3rem] !p-2">
          <Footer />
        </footer>
      </Container>
    </CodeFlavorProvider>
  );
};

export default CodeFlavorPage;
