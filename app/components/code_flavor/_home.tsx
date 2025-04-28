"use client";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import {
  IconChevronRight,
  IconDotsVertical,
  IconMail,
  IconPlayerPlay,
  IconReload,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import myPhoto1 from "../../assets/my_photo_1.jpg";
const Home = () => {
  const MY_NAME = "Fanuel Amare";
  const MY_POSITION = "Full Stack Developer (Frontend Focus)";
  const MY_EMAIL = "fanuelamare6577@gmail.com";
  const MY_PHONE_NUMBER = "+251968725990";
  const MY_LOCATION = "Addis Ababa, Ethiopia";
  const MY_GITHUB_LINK = "https://github.com/fanu-cd";
  const MY_LINKEDIN_LINK = "https://www.linkedin.com/in/fanucd";
  
  const varValueColor = "hsla(320, 5%, 71%, 1)";
  const myDetails = [
    {
      label: { value: "my e-mail", color: varValueColor },
      varType: { value: "const", color: "blue" },
      operator: { value: "=", color: "white" },
      varName: { value: "email", color: varValueColor },
      varValue: { value: `"${MY_EMAIL}";`, color: "orange" },
    },
    {
      label: { value: "my phone number", color: varValueColor },
      varType: { value: "const", color: "blue" },
      operator: { value: "=", color: "white" },
      varName: { value: "phoneNumber", color: varValueColor },
      varValue: { value: `"${MY_PHONE_NUMBER}";`, color: "orange" },
    },
    {
      label: { value: "my location", color: varValueColor },
      varType: { value: "const", color: "blue" },
      operator: { value: "=", color: "white" },
      varName: { value: "myLocation", color: varValueColor },
      varValue: { value: `"${MY_LOCATION}";`, color: "orange" },
    },
    {
      label: { value: "my github link", color: varValueColor },
      varType: { value: "const", color: "blue" },
      operator: { value: "=", color: "white" },
      varName: { value: `githubLink`, color: varValueColor },
      varValue: { value: `"${MY_GITHUB_LINK}";`, color: "orange" },
    },
    {
      label: { value: "my linkedIn link", color: varValueColor },
      varType: { value: "const", color: "blue" },
      operator: { value: "=", color: "white" },
      varName: { value: "linkedInLink", color: varValueColor },
      varValue: {
        value: `"${MY_LINKEDIN_LINK}";`,
        color: "orange",
      },
    },
  ];
  const [isRun, setIsRun] = useState(false);

  const colors = { code: "blue" };
  return (
    <Container fluid className="w-full h-full">
      <Center className="h-full w-full" mt={30}>
        <Grid className="w-full h-full p-3 md:w-[80%] mx-auto" gutter={20}>
          <Grid.Col span={{ sm: 12, md: 6 }}>
            <Stack>
              <Text c="white">Hi, I am</Text>
              <Text className="!text-4xl" c="white">
                {MY_NAME}
              </Text>
              <Group gap={2}>
                <IconChevronRight color={colors.code} />
                <Text c={colors.code}>{MY_POSITION}</Text>
              </Group>
              <Stack mt={10}>
                {myDetails.map((detail) => (
                  <Stack key={detail.label.value} gap={1}>
                    <Text c={detail.label.color}>
                      {"//"}
                      {detail.label.value}
                    </Text>
                    <Group>
                      <Text c={detail.varType.color}>
                        {detail.varType.value}
                      </Text>
                      <Text c={detail.varName.color}>
                        {detail.varName.value}
                      </Text>
                      <Text c={detail.operator.color}>
                        {detail.operator.value}
                      </Text>
                      <Text c={detail.varValue.color}>
                        {detail.varValue.value}
                      </Text>
                    </Group>
                  </Stack>
                ))}
              </Stack>
              <Button
                mt={20}
                variant="subtle"
                fullWidth={false}
                className="mr-auto"
                leftSection={<IconPlayerPlay size={"1.2rem"} />}
                onClick={() => {
                  setIsRun(true);
                }}
                disabled={isRun}
              >
                Run code
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ sm: 12, md: 6 }}>
            <Stack className="min-h-[20rem] border">
              <Flex
                className="bg-orange-300 rounded-sm p-1"
                justify={"space-between"}
              >
                <Group>
                  <IconReload size={"1.2rem"} />
                  <TextInput
                    value={"http://localhost:3000/"}
                    readOnly
                    className="bg-transparent border-transparent"
                    styles={{ input: { background: "transparent" } }}
                  />
                </Group>
                <Group>
                  <IconDotsVertical size={"1.2rem"} />
                </Group>
              </Flex>
              <Box>
                <Center>
                  {isRun ? (
                    <Stack className="p-2">
                      <Image
                        src={myPhoto1}
                        alt="My photo"
                        className="rounded-full"
                        width={200}
                        height={200}
                      />
                      <Button
                        variant="outline"
                        leftSection={<IconMail />}
                        fullWidth={false}
                        className="mx-auto"
                        onClick={() => {
                          window.location.href = `mailto:${MY_EMAIL}`;
                        }}
                      >
                        Email me
                      </Button>
                    </Stack>
                  ) : (
                    <Text c="orange">{"//"}Run the code to see me</Text>
                  )}
                </Center>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Center>
    </Container>
  );
};

export default Home;
