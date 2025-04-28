import {
  Accordion,
  ActionIcon,
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  List,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAppWindow,
  IconBook,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBriefcase,
  IconCheck,
  IconCheckbox,
  IconCode,
  IconDeviceLaptop,
  IconFolderFilled,
  IconGitBranch,
  IconInfoCircle,
  IconPalette,
  IconSchool,
  IconServer,
  IconStarFilled,
  IconTools,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import GradPhoto1 from "../../assets/my_grad_photo_1.jpg";
import { useMediaQuery } from "@mantine/hooks";
const AboutMe = () => {
  const { Col } = Grid;
  const { Item } = List;
  const CODE_COLOR_1 = "#a9a9a9";
  const CODE_COLOR_2 = "hsla(155, 100%, 40%, 1)";
  const MY_NAME = "Fanuel Amare";
  const MY_POSITION =
    "a a Passionate Full Stack Software Developer with a focus on Frontend Development.";
  const MY_EDUCATION_STATEMENT = `I graduated from Addis Ababa University with a Bachelor degree in Computer
      Science with a Great Distinction and I have been working on Software
      Development for over 5 years.`;

  const MY_SHORT_BIO = `
      I am a skilled software developer proficient in frontend technologies
        like React.js, Next.js, TypeScript, and various UI frameworks such as
        Ant Design, Material-UI, Mantine-UI, and TailwindCSS, as well as backend
        technologies including Node.js, Express.js, MongoDB, and Mongoose, with
        a strong understanding of both frontend and backend development to build
        efficient, scalable web applications.`;

  const bioCode = [
    <Text c={CODE_COLOR_1} key={0}>
      {"/**"}
    </Text>,
    <Text c={CODE_COLOR_1} key={0}>
      * {`About ${MY_NAME}`}
    </Text>,
    <Text c={CODE_COLOR_2} key={0}>
      Hello, I am {MY_NAME}
    </Text>,
    <Text c={CODE_COLOR_2} key={0}>
      I am {MY_POSITION}
    </Text>,
    <Text c={CODE_COLOR_2} key={0}>
      {MY_EDUCATION_STATEMENT}
    </Text>,
    <Text c={CODE_COLOR_1} key={0}>
      {"//"}My Top Software Development Skills
    </Text>,
    <Group key={0}>
      <Text c={"blue"}>{MY_SHORT_BIO}</Text>
    </Group>,
    <Text c={CODE_COLOR_1} key={0}>
      */
    </Text>,
  ];

  const BioContent = () => (
    <Box>
      <Grid className="w-full">
        <Col span={1} className="border-r">
          <Stack gap={2} className="p-2">
            {bioCode.map((code, i) => (
              <Text key={i} c={CODE_COLOR_1}>
                {i + 1}
              </Text>
            ))}
          </Stack>
        </Col>
        <Col span={11}>
          <Stack gap={2} className="p-2">
            {bioCode.map((code, i) => (
              <Box key={i} className="p-0">
                {code}
              </Box>
            ))}
          </Stack>
        </Col>
      </Grid>
    </Box>
  );

  const devFrontendSkills = [
    {
      icon: <IconBrandHtml5 color="orange" />,
      label: <Text c="orange">HTML5</Text>,
    },
    {
      icon: <IconBrandCss3 color="#1572B6" />,
      label: <Text c="#1572B6">CSS3</Text>,
    },
    {
      icon: <IconBrandJavascript color="#F7DF1E" />,
      label: <Text c="#F7DF1E">JavaScript</Text>,
    },
    {
      icon: <IconBrandTypescript color="#3178C6" />,
      label: <Text c="#3178C6">TypeScript</Text>,
    },
    {
      icon: <IconBrandReact color="#61DAFB" />,
      label: <Text c="#61DAFB">React.js</Text>,
    },
    {
      icon: <IconBrandReactNative color="#61DAFB" />,
      label: <Text c="#61DAFB">React Native</Text>,
    },
    {
      icon: <IconBrandNextjs color={CODE_COLOR_1} />,
      label: <Text c={CODE_COLOR_1}>Next.js</Text>,
    },
    {
      icon: <IconBrandBootstrap color="#563D7C" />,
      label: <Text c="#563D7C">Bootstrap</Text>,
    },
    {
      icon: <IconBrandTailwind color="#38BDF8" />,
      label: <Text c="#38BDF8">Tailwindcss</Text>,
    },
    {
      icon: <IconAppWindow color="#1890FF" />,
      label: <Text c="#1890FF">Ant Design</Text>,
    },
    {
      icon: <IconAppWindow color="#1976D2" />,
      label: <Text c="#1976D2">Material-UI</Text>,
    },
    {
      icon: <IconBrandMantine color="#3399FF" />,
      label: <Text c="#3399FF">Mantine-UI</Text>,
    },
    {
      icon: <IconAppWindow color="#1976D2" />,
      label: <Text c="#1976D2">Microsoft SharePoint</Text>,
    },
    {
      icon: <IconAppWindow color="#3399FF" />,
      label: <Text c="#3399FF">SPFx</Text>,
    },
  ];

  const devBackendSkills = [
    {
      icon: <IconBrandNodejs color="#68A063" />,
      label: <Text c="#68A063">Node.js</Text>,
    },
    {
      icon: <IconAppWindow color={CODE_COLOR_1} />,
      label: <Text c={CODE_COLOR_1}>Express.js</Text>,
    },
    {
      icon: <IconBrandMongodb color="#47A248" />,
      label: <Text c="#47A248">MongoDB</Text>,
    },
    {
      icon: <IconAppWindow color="#47A248" />,
      label: <Text c="#47A248">Mongoose</Text>,
    },
  ];

  const devAllSkills = [
    "HTML5, CSS3, JavaScript,TypeScript",
    "React.js, React Native,Next.js",
    "Bootstrap,Tailwindcss",
    "Ant Design, Material-UI, Mantine-UI",
    "Node.js, Express.js, MongoDB, Mongoose,",
    "Microsoft SharePoint,SPFx",
  ];

  const DevSkillsContent = () => (
    <Box>
      <Grid className="w-full">
        <Col span={isSmallScreen ? 12 : 3} className="border-r-1">
          <Stack gap={2} className="p-2">
            <Text c={CODE_COLOR_1}>{"//"}My Skills</Text>
            <Group>
              <Text c="blue">function</Text>
              <Text c="blue">getMySkills {"{"}</Text>
            </Group>
            <Group>
              <Text c={"orange"} className="text-wrap" ms={20}>
                return({'"'}
                <List color="orange" ms={20}>
                  {devAllSkills.map((item) => (
                    <Item key={item}>{item}</Item>
                  ))}
                </List>
                {'"'});
              </Text>
            </Group>
            <Text c={"blue"}>{"};"}</Text>
            <Divider color={CODE_COLOR_2} my={10} />
            <Group gap={2} className="p-2">
              <IconCheck size={"1.1rem"} color={CODE_COLOR_2} />
              <Text c={CODE_COLOR_2}>Code Run in 2ms</Text>
            </Group>
          </Stack>
        </Col>
        <Col span={isSmallScreen ? 12 : 9}>
          <Stack className="p-2">
            <Group>
              <IconDeviceLaptop color="#FF6F61" />

              <Title order={6} c={"#FF6F61"}>
                Frontend Skills
              </Title>
            </Group>
            <SimpleGrid ms={10} cols={isSmallScreen ? 2 : 3}>
              {devFrontendSkills.map((skill, i) => (
                <Box key={i}>
                  <Group gap={2}>
                    <IconCheckbox color={CODE_COLOR_1} />
                    {skill.icon}
                    {skill.label}
                  </Group>
                </Box>
              ))}
            </SimpleGrid>
            <Divider my={10} color="orange" />
            <Group>
              <IconServer color="#4CAF50" />

              <Title order={6} c={"#4CAF50"}>
                Backend Skills
              </Title>
            </Group>

            <SimpleGrid ms={10} cols={isSmallScreen ? 2 : 3}>
              {devBackendSkills.map((skill, i) => (
                <Box key={i}>
                  <Group gap={2}>
                    <IconCheckbox color={CODE_COLOR_1} />
                    {skill.icon}
                    {skill.label}
                  </Group>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Col>
      </Grid>
    </Box>
  );

  const otherSkills = [
    { title: "Problem-Solving" },
    { title: "Communication" },
    { title: "Collaboration" },
    { title: "Adaptability" },
    { title: "Time Management" },
    { title: "Attention to Detail" },
    { title: "Critical Thinking" },
    { title: "Creativity" },
    { title: "Patience" },
  ];

  const MY_OTHER_SKILLS_STATEMENT = `
  I have developed these skills in my past and present experiences
              as a Lead and Key Developer in different teams I have been working
              in. One of these are my role as a Lead Full-Stack Developer in our
              Final Year Bid Management Software Project in Addis Ababa
              University. I had the role of Project Management, Full Stack
              Development and Team Leadership on this project. (More on this,
              see the '_projects' tab)`;

  const OtherSkillsContent = () => (
    <Box>
      <Stack className="p-2">
        <Box>
          <Text c={CODE_COLOR_2}>
            1 import MyOtherSkills from &apos;@/my-other-skills&apos;
          </Text>
          <Text c={CODE_COLOR_2}>
            2 const MySkills = () ={"> "}
            {"{"}
            <br />3 &nbsp;{"return <MyOtherSkills />"}
            <br />
            4&nbsp;{"};"}
          </Text>
        </Box>
        <Divider color="orange" my={5} />
        <Box>
          <Title order={6} c={CODE_COLOR_1}>
            My Other Relevant Skills
          </Title>
          <SimpleGrid cols={isSmallScreen ? 2 : 3} ms={10}>
            {otherSkills.map((skill) => (
              <Group key={skill.title}>
                <IconCheckbox color={CODE_COLOR_1} />
                <Text c="orange">{skill.title}</Text>
              </Group>
            ))}
          </SimpleGrid>
          <Alert color={CODE_COLOR_1} icon={<IconInfoCircle />} mt={20}>
            <Text c={CODE_COLOR_1}>{MY_OTHER_SKILLS_STATEMENT}</Text>
          </Alert>
        </Box>
      </Stack>
    </Box>
  );

  const MY_GRADUATION_STATEMENT = `
  I Graduated from Addis Ababa University, with a Computer Science
            Major in July, 2023.`;

  const EducationContent = () => (
    <Box>
      <Stack className="p-2">
        <Box>
          <Text c={CODE_COLOR_2}>interface UniversityEducation{"{"}</Text>
          <Text c={"blue"} ms={15}>
            degree: string; <br />
            major: string; <br />
            university: string; <br />
            graduationYear: number;
          </Text>
          <Text c={CODE_COLOR_2}>{"}"}</Text>
        </Box>
        <Text c={CODE_COLOR_1}>{"//My Education"}</Text>
        <Group>
          <Text c={"orange"}>{MY_GRADUATION_STATEMENT}</Text>
          <IconSchool color="green" />
        </Group>
        <Box>
          <Text c={CODE_COLOR_2}>{"<Image"}</Text>
          <Grid className="w-full">
            <Col span={isSmallScreen ? 6 : 4}>
              <Group justify="center" align="center" h={200} wrap="nowrap">
                <Text c={CODE_COLOR_2}>src =</Text>
                <Text size={"10rem"} c={CODE_COLOR_2}>
                  {"{"}
                </Text>
              </Group>
            </Col>
            <Col span={isSmallScreen ? 6 : 8}>
              <Image
                src={GradPhoto1}
                width={isSmallScreen ? 100 : 200}
                height={200}
                alt="my grad photo"
                className="rounded-md"
              />
            </Col>
          </Grid>
          <Text c={CODE_COLOR_2}>{"/>"}</Text>
        </Box>
      </Stack>
    </Box>
  );

  const experiences = [
    {
      company: "Tria plc",
      duration: "July 2023 - Present",
      header: `
      Since I joined Tria plc in 2023, I have been working on
                  various big projects like a Smart Office(Office Automation
                  System) and IFHCRS(Healthcare Licensing System for Health
                  Professionals and Health Facilities).`,
      projects: [
        {
          title: "Smart Office Solution",
          description: `Our Smart Office Solution offers various modules like
                          Record Management, Project Management, Document
                          Management and Plan Management. We used SPFx(Microsoft
                          SharePoint Framework) for the Frontend and Microsoft
                          SharePoint and ASP.NET for the Backend.`,
          features: [
            {
              title: `User Management(integrated with an AD(Active
                            Directory))`,
            },
            {
              title: `Authentication & Authorization(role and permission
                            based secure login systems)`,
            },
            {
              title: `Notification systems(utilizing SharePoint&apos;s
                            workflow actions)`,
            },
            {
              title: `File Uploads and Document Management(using
                            SharePoint&apos;s dedicated list-library feature)`,
            },
            {
              title: ` Secure and token-based REST API Integration
                            (utilizing SharePoint's REST Service and ASP.NET)`,
            },
            {
              title: `Workflow Automation(using SharePoint's own Workflow
                            designer and installed apps like infowise)`,
            },
          ],
        },
        {
          title: "IFHCRS (Healthcare licensing system)",
          description: `Our Healthcare Licensing System provides a fully
                          digital platform for health license applications,
                          real-time tracking, certification, and post-licensing
                          processes such as renewals, upgrades, suspensions,
                          complaints, and regulatory management. We used
                          React.js and Next.js for the Frontend and Nest.js for
                          the Backend implementations.`,
          features: [
            {
              title: ` User Management(enabling license applicants to
                            easily register on the platform, while providing
                            tools for administrators to manage employee accounts
                            and system access.)`,
            },
            {
              title: `Authentication & Authorization(role and permission
                            based secure login systems)`,
            },
            {
              title: `Notification systems(Socket.io with a dedicated
                            Notification server for faster Notifications)`,
            },
            {
              title: `Automatic task scheduling for backend actions(using
                            Cron jobs)`,
            },
            {
              title: ` Dynamic form designs(using the robust Form.io
                            platform)`,
            },
            {
              title: `  Secure and token-based REST API Integration (with
                            the robust RTK Query)`,
            },
            {
              title: ` Workflow Automation(using React Flow for frontend
                            workflow designs together with Nest.js)`,
            },
          ],
        },
      ],
    },
  ];

  const ExperiencesContent = () => (
    <Box>
      <Stack className="p-2" gap={2}>
        <Group>
          <Text c={"orange"}>{"<>"}</Text>
          <Text c={CODE_COLOR_2}>{"Work Experiences"}</Text>
          <Text c={"orange"}>{"</>"}</Text>
        </Group>
        <Group gap={0}>
          <Box className="h-[1px] w-[50%] bg-amber-400" />
          <IconStarFilled size={"1.1rem"} color="gold" />
        </Group>
        <Accordion
          defaultValue={experiences[0].company}
          mt={15}
          color="orange"
          classNames={{
            chevron: "text-white",
            control: "!text-white bg-transparent hover:!bg-transparent",
          }}
        >
          {experiences.map((experience) => (
            <Accordion.Item value={experience.company} key={experience.company}>
              <Accordion.Control h={40}>
                <Stack gap={1}>
                  <Text c="orange">{experience.company}</Text>
                  <Text c="orange">{experience.duration}</Text>
                </Stack>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="blue">{experience.header}</Text>
                <ScrollArea h={500} classNames={{ scrollbar: "!bg-blue-400" }}>
                  <List ms={15} mt={10} spacing={10}>
                    {experience.projects.map((project) => (
                      <Item key={project.title}>
                        <Title order={4} c="blue">
                          {project.title}
                        </Title>
                        <Stack>
                          <Text size="xs" c="blue">
                            {project.description}
                          </Text>
                          <Text size="xs" c="blue">
                            The system has all modern features such as:
                          </Text>
                          <List
                            icon={<IconCheck color="blue" size={"0.9rem"} />}
                          >
                            {project.features?.map((feature) => (
                              <Item
                                className="text-xs text-blue-300"
                                key={feature.title}
                              >
                                {feature.title}
                              </Item>
                            ))}
                          </List>
                          <Text c={"blue"} size="xs">
                            ...and other modern implementations. and as one of
                            the KEY developers and project leads in the project,
                            I have worked on all the above areas to create a
                            scalable and high performance System.
                          </Text>
                        </Stack>
                      </Item>
                    ))}
                  </List>
                </ScrollArea>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Box>
  );

  const repoContents = [
    {
      title: "bio",
      icon: <IconUser size={"1.2rem"} color="orange" />,
      color: "orange",
      content: <BioContent />,
    },
    {
      title: "skills",
      icon: <IconTools size={"1.2rem"} color="blue" />,
      color: "blue",
      content: "skills",
      children: [
        {
          title: "dev",
          icon: <IconCode size={"1.2rem"} color="blue" />,
          color: "blue",
          content: <DevSkillsContent />,
        },
        {
          title: "other",
          icon: <IconPalette size={"1.2rem"} color="blue" />,
          color: "blue",
          content: <OtherSkillsContent />,
        },
      ],
    },
    {
      title: "education",
      icon: <IconBook size={"1.2rem"} color="green" />,
      color: "green",
      content: <EducationContent />,
    },

    {
      title: "experiences",
      icon: <IconBriefcase size={"1.2rem"} color="cyan" />,
      color: "cyan",
      content: <ExperiencesContent />,
    },
  ];

  const [activeRepoFile, setActiveRepoFile] = useState("bio");
  const isSmallScreen = useMediaQuery("(max-width:42rem)");

  return (
    <Container fluid className="w-full">
      <Grid className="border w-full h-full">
        <Col span={{ base: 2, sm: 1 }} className="border-r">
          <Stack>
            <Button variant="transparent">
              <IconFolderFilled />
            </Button>
            <Button variant="transparent">
              <IconGitBranch />
            </Button>
          </Stack>
        </Col>
        <Col span={3} className="border-r-2">
          <Box>
            <Accordion
              defaultValue={"repo-name"}
              chevronPosition="left"
              classNames={{
                chevron: "text-white",
                control: "!text-white bg-transparent hover:!bg-transparent",
              }}
            >
              <Accordion.Item value="repo-name">
                <Accordion.Control>about-me</Accordion.Control>
                <Accordion.Panel>
                  <Stack ps={3}>
                    {repoContents.map((content) =>
                      content.children?.length ? (
                        <Accordion
                          defaultValue={content.children[0].title}
                          classNames={{
                            chevron: `!text-white`,
                            control: `!text-white bg-transparent hover:!bg-transparent`,
                          }}
                          key={content.title}
                        >
                          <Accordion.Item value="repo-name" key={content.title}>
                            <Accordion.Control icon={content.icon}>
                              {content.title}
                            </Accordion.Control>
                            <Accordion.Panel>
                              <Stack>
                                {content.children.map((child) => (
                                  <Group
                                    key={child.title}
                                    gap={2}
                                    onClick={() => {
                                      setActiveRepoFile(
                                        `${content.title}/${child.title}`
                                      );
                                    }}
                                    className="cursor-pointer"
                                  >
                                    {child.icon}
                                    <Text c={child.color}>{child.title}</Text>
                                  </Group>
                                ))}
                              </Stack>
                            </Accordion.Panel>
                          </Accordion.Item>
                        </Accordion>
                      ) : (
                        <Group
                          key={content.title}
                          gap={2}
                          onClick={() => {
                            setActiveRepoFile(content.title);
                          }}
                          className="cursor-pointer"
                        >
                          {content.icon}
                          <Text c={content.color}>{content.title}</Text>
                        </Group>
                      )
                    )}
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Box>
        </Col>
        <Col span={{ base: 7, sm: 8 }} className="border-r-2 !p-0">
          <Stack gap={2}>
            {activeRepoFile ? (
              <Box className="border-b p-2 ps-3">
                <Group gap={20}>
                  <Text c="white">{activeRepoFile}</Text>
                  <ActionIcon
                    variant="transparent"
                    onClick={() => {
                      setActiveRepoFile("");
                    }}
                  >
                    <IconX color="white" size={"1.1rem"} />
                  </ActionIcon>
                </Group>
              </Box>
            ) : (
              <Box className="border-b-2" h={35} />
            )}
            <Box mt={3}>
              {activeRepoFile?.includes("/")
                ? repoContents
                    ?.find((x) => x.title === activeRepoFile.split("/")[0])
                    ?.children?.find(
                      (child) => child.title === activeRepoFile.split("/")[1]
                    )?.content
                : repoContents?.find((x) => x.title === activeRepoFile)
                    ?.content}
            </Box>
          </Stack>
        </Col>
      </Grid>
    </Container>
  );
};

export default AboutMe;
