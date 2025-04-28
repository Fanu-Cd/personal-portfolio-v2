import { useCodeFlavorContext } from "../../contexts/use-code-flavor-context";
import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  Stack,
  Switch,
  Tabs,
  Text,
} from "@mantine/core";
import "../../styles/code_flavor/main.css";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";
const Header = () => {
  const { tabs, selectedTab, setSelectedTab } = useCodeFlavorContext();
  const MY_NAME = "fanuel-amare";
  const [opened, { toggle }] = useDisclosure();
  const isSmallScreen = useMediaQuery("(max-width:42rem)");
  const router = useRouter();

  const onFlavorChange = () => {
    const mode = "basic";
    router?.push(`?flavor=${mode}`);
  };

  return (
    <Box className="flex justify-between items-center border">
      <Box className="border-r p-2">
        {isSmallScreen ? (
          <Group gap={2} wrap="nowrap">
            <Box className="w-[3rem]">
              <Burger
                opened={opened}
                color="orange"
                size={"sm"}
                onClick={toggle}
              />
            </Box>
            <Text className="green-text">{MY_NAME}</Text>
          </Group>
        ) : (
          <Text className="green-text">{MY_NAME}</Text>
        )}
      </Box>
      <Box className="w-[50%]" hidden={isSmallScreen}>
        <Tabs
          value={selectedTab}
          onChange={setSelectedTab as any}
          classNames={{ tab: `!text-white hover:!bg-transparent` }}
          color="orange"
          variant="outline"
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab value={tab} key={tab}>
                {tab}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Box>
      <Box className="border-l p-2">
        <Group justify="end">
          <Text className="green-text">_contact_me</Text>
          <Divider orientation="vertical" />
          <Stack gap={2}>
            <Switch
              label="Switch to basic flavor"
              classNames={{ label: `!text-white` }}
              onChange={onFlavorChange}
            />
            <Text size="xs" ms={5} c={"white"}>
              (Better for small devices)
            </Text>
          </Stack>
        </Group>
      </Box>
      <Drawer
        opened={opened}
        onClose={toggle}
        title="Menu"
        styles={{
          content: {
            backgroundColor: "#2d3748",
          },
          header: {
            backgroundColor: "#2d3748",
            color: "orange",
          },
          close: {
            color: "orange",
            backgroundColor: "transparent",
          },
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={(e) => {
            setSelectedTab(e);
            toggle();
          }}
          classNames={{ tab: `!text-white hover:!bg-transparent` }}
          color="orange"
          variant="default"
          orientation="vertical"
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab value={tab} key={tab}>
                {tab}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Drawer>
    </Box>
  );
};

export default Header;
