"use client";
import { Button, Center, Container, Stack, Text } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import CodeFlavorPage from "./pages/code-flavor-page";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userFlavor: "basic" | "code" = useMemo(() => {
    const flavor = searchParams?.get("flavor");
    if (flavor === "basic") return "basic";
    else return "code";
  }, [searchParams]);

  useEffect(() => {
    if (!["code", "basic"]?.includes(searchParams?.get("flavor") as string)) {
      router?.push(`?flavor=code`);
    }
  }, [searchParams]);

  return (
    <Container fluid className="w-full !p-0">
      {userFlavor === "code" ? (
        <CodeFlavorPage />
      ) : (
        <Center h={500}>
          <Stack>
            <Text fw={"bold"}>Basic Mode Coming Up...</Text>
            <Button
              leftSection={<IconArrowLeft size={"1.2rem"} />}
              onClick={() => {
                router?.push(`?flavor=code`);
              }}
              variant="outline"
            >
              Back to Code flavor
            </Button>
          </Stack>
        </Center>
      )}
    </Container>
  );
}
