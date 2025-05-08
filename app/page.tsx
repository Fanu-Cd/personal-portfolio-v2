"use client";
import {
  Alert,
  Anchor,
  Button,
  Center,
  Container,
  Divider,
  Stack,
  Text,
} from "@mantine/core";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import CodeFlavorPage from "./pages/code-flavor-page";
import { IconArrowLeft, IconExternalLink } from "@tabler/icons-react";

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

  const V1_PORFOLIO_LINK = "https://fanu-personal-portfolio.netlify.app/";

  return (
    <Container fluid className="w-full !p-0">
      {userFlavor === "code" ? (
        <CodeFlavorPage />
      ) : (
        <Center h={500}>
          <Stack>
            <Text fw={"bold"}>Basic Mode Coming Up,</Text>
            <Stack>
              <Button
                leftSection={<IconArrowLeft size={"1.2rem"} />}
                onClick={() => {
                  router?.push(`?flavor=code`);
                }}
                variant="outline"
              >
                Back to Code flavor
              </Button>
              <Divider label="Or" />
              <Anchor href={V1_PORFOLIO_LINK} target="_blank">
                <Button
                  fullWidth
                  className="mx-auto"
                  rightSection={<IconExternalLink size={"0.9rem"} />}
                >
                  Visit My Second Portfolio
                </Button>
              </Anchor>
            </Stack>
          </Stack>
        </Center>
      )}
    </Container>
  );
}
