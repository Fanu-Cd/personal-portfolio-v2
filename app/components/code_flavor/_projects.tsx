"use client";
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import bidManagementPhoto1 from "../../assets/bid_management_photo_1.png";
import lmsPhoto1 from "../../assets/learning_management_photo_1.png";
import rentalProjectPhoto1 from "../../assets/rental_project_photo_1.webp";
import Image from "next/image";
import { IconBrandGithub } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
const Projects = () => {
  const CODE_COLOR_1 = "#a9a9a9";
  const CODE_COLOR_2 = "hsla(155, 100%, 40%, 1)";
  const { Slide } = Carousel;
  const projectSlides = [
    {
      title: "kiraybet (House rental platform)",
      description: `<div>
          <p>
            Kiraybet(meaning 'house rent' in Amharic) is A rental house platform
            where owners can list properties, tenants can browse listings, and
            both parties can communicate through a Real time chat system.
          </p>
          <p class="mt-5">
  The platform delivers a secure authentication system with smooth onboarding for house tenants and owners. It includes dynamic filtering capabilities for house listings, an intuitive and responsive user interface, and interactive map integration for easy property navigation. House owners can efficiently post and manage rental services, while tenants benefit from a real-time chat system to communicate directly with owners.
</p>
<p class="mt-5">
  The system was built using modern technologies, including React.js, Node.js, Express.js, MongoDB, Mongoose, and Socket.io.
</p>

        </div>`,
      photo: rentalProjectPhoto1,
      githubLink: "https://github.com/Fanu-Cd/kiraybet",
    },
    {
      title: "academiX (Learning management system)",
      description: `<div>
      <p>academiX is a comprehensive Learning Management System (LMS)
that offers robust school administration tools for administrators and efficient course and lesson management features for lecturers. Students can seamlessly access courses and lessons delivered by
their lecturers through an intuitive, user-friendly, and engaging
interface.</p>
<p class="mt-5">
  The platform offers a secure authentication system and robust administrative management for students, instructors, and courses. Students can seamlessly register for and manage courses and lessons, while instructors are empowered to deliver content and design examinations efficiently. The intuitive design ensures an optimized experience for all users.
</p>
<p class="mt-5">
  Built with modern technologies such as React.js, Node.js, Express.js, MongoDB, and Mongoose.
</p>

      </div>`,
      photo: lmsPhoto1,
      githubLink: "https://github.com/Fanu-Cd/academix",
    },
    {
      title: "cheretanet (Bid management system)",
      description: `<div>
<p>
     cheretanet(meaning 'a network for bidding' in amharic) is an online platform designed to streamline the bidding and tender management processes. It allows bidders, procurement department heads, and procurement endorsing committee heads to actively participate in tender processes, while the general public can view tender advertisements and bid awards without requiring an account.",
</p>
<p class='mt-5'>
  The platform offers seamless registration and account management for suppliers, along with efficient bid management tools for procurement departments and endorsement committees. It delivers a user-friendly interface and smooth user experience, ensuring secure, up-to-date bidding processes. Additionally, it facilitates communication between procurement departments to streamline operations.
</p>
<p class="mt-5">
  The system was developed using React.js, Node.js, Express.js, MongoDB, and Mongoose.
</p>
</div>`,
      photo: bidManagementPhoto1,
      githubLink: "https://github.com/mihretue/Bid-management-project",
    },
  ];

  const MY_EMAIL = "fanuelamare6577@gmail.com";
  const isSmallScreen = useMediaQuery("(max-width:42rem)");

  return (
    <Container fluid className="w-full">
      <Stack className="p-2">
        <Flex justify={"space-between"}>
          <Group gap={1}>
            <Text size="3rem" c={CODE_COLOR_2} fs={"italic"}>
              M
            </Text>
            <Title c={"cyan"}>y top projects</Title>
            <Text c={"orange"}>____________</Text>😊
          </Group>
          <Group gap={3}>
            <Text c={CODE_COLOR_2}>Want to discuss a project?</Text>
            <Button
              variant="subtle"
              onClick={() => {
                window.location.href = `mailto:${MY_EMAIL}`;
              }}
              color="orange"
            >
              Email me
            </Button>
          </Group>
        </Flex>
        <Text ms={10} size="xs" c={CODE_COLOR_1}>
          - Apart from my company projects(that I listed in the
          &apos;experiences&apos; section in the &apos;_about-me&apos; tab), I
          have listed some of my projects below,
        </Text>
        <Divider color="blue" w={"70%"} />
        <Box className="w-[95%] mx-auto">
          <Stack>
            <Carousel
              withIndicators
              withControls
              classNames={{ control: "!bg-orange-400" }}
              slidesToScroll={isSmallScreen ? 1 : 3}
              slideGap={"md"}
              slideSize={{ base: "100%", sm: "50%", md: "33.3333%" }}
            >
              {projectSlides.map((slide) => (
                <Slide key={slide.title}>
                  <Box className="w-full flex justify-center items-center">
                    <Card bg={"transparent"}>
                      <Card.Section>
                        <Stack className="w-full">
                          <Text size="sm" c={CODE_COLOR_1}>
                            {"//"}
                            {slide.title}
                          </Text>
                          <Box className="p-1 flex justify-center items-center">
                            <Image
                              src={slide.photo}
                              alt="Photo"
                              width={250}
                              height={160}
                              className="rounded-md"
                            />
                          </Box>
                          <Box
                            c={CODE_COLOR_2}
                            size="sm"
                            className="text-start"
                            dangerouslySetInnerHTML={{
                              __html: slide.description,
                            }}
                          />
                          <Group justify="center" mt={10}>
                            <Anchor href={slide.githubLink}>
                              <Button
                                variant="outline"
                                leftSection={<IconBrandGithub />}
                              >
                                View on Github
                              </Button>
                            </Anchor>
                          </Group>
                        </Stack>
                      </Card.Section>
                    </Card>
                  </Box>
                </Slide>
              ))}
            </Carousel>
            <Group my={30}>
              &nbsp;&nbsp;&nbsp;
              <Text c="white">
                _______________**_____________________________
              </Text>
            </Group>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Projects;
