import { Anchor, Box, Group, Text } from "@mantine/core";
import "../../styles/code_flavor/main.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
const Footer = () => {
  const GREEN_TEXT = "hsla(155, 100%, 40%, 1)";
  const MY_GITHUB_USER_NAME = "@fanu-cd";

  const socialMediaLInks = [
    {
      icon: <IconBrandLinkedin color={GREEN_TEXT} />,
      link: "https://www.linkedin.com/in/fanucd/",
    },
  ];
  const githubLink = {
    icon: <IconBrandGithub color={GREEN_TEXT} />,
    userName: MY_GITHUB_USER_NAME,
    link: "https://github.com/fanu-cd",
  };

  return (
    <Box className={`flex justify-between border`}>
      <Box className="border-r px-2">
        <Group>
          <Text className="green-text">find me in:</Text>
          {socialMediaLInks.map((link) => (
            <Box className="border-l py-2 pl-1" key={link.link}>
              <Anchor href={link.link}>{link.icon}</Anchor>
            </Box>
          ))}
        </Group>
      </Box>
      <Box className="border-l p-2">
        <Anchor href={githubLink.link}>
          <Group>
            <Text c={GREEN_TEXT}>{githubLink.userName}</Text>
            {githubLink.icon}
          </Group>
        </Anchor>
      </Box>
    </Box>
  );
};

export default Footer;
