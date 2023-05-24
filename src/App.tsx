import React, { useState } from "react";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  rem,
  Image,
  Grid,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Logo from "./assets/logo.png";
import GLogo from "./assets/gicon.png";
import LeftImage from "./assets/Left.png";
import GooglePag from "./assets/gpay.png";
import ApplePag from "./assets/applepay.png";
import Carousel from "./Carousel";

const useStyles = createStyles((theme) => ({
  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: "100vh",
    maxWidth: "50%",
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

function App() {
  const { classes } = useStyles();
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <Grid>
        {/* left */}
        <Grid.Col md={6} className="grid_left">
          {/* <div className="image_left">
            <Image
              src={LeftImage}
              height="100vh"
              width="100%"
              // width={800}
              radius={0}
              withPlaceholder
              placeholder="LeftImage"
            />
            <Text className="image_text">
              Social media shared today, tomorrow or by location
            </Text>
          </div> */}
          <Text className="left_header_text">
            Social media shared today, tomorrow or by location
          </Text>
          <Carousel />
        </Grid.Col>

        {/* Right */}
        <Grid.Col md={6} pr={40} pl={40}>
          <Paper pt={10}>
            {/* Logo */}
            <Group mb={20}>
              <Image
                src={Logo}
                height={70}
                width={60}
                radius={0}
                withPlaceholder
                placeholder="logo"
              />

              <Text fw="bold">Capzul</Text>
            </Group>

            {/* Title */}
            <Title order={2} className={classes.title} ta="left" mt="md" mb={4}>
              Create account
            </Title>
            <Text fz="sm" mb={20}>
              For business, band ot celebrity.
            </Text>

            {/* Form */}
            <Grid>
              <Grid.Col xs={6}>
                <TextInput label="First name" placeholder="John" size="md" />
              </Grid.Col>
              <Grid.Col xs={6}>
                <TextInput label="Last name" placeholder="Doe" size="md" />
              </Grid.Col>

              <Grid.Col xs={6}>
                <TextInput
                  label="Email or Phone number"
                  placeholder="hello@gmail.com"
                  size="md"
                />
              </Grid.Col>

              <Grid.Col xs={6}>
                <DatePickerInput
                  label="Date of birth (MM/DD/YY)"
                  placeholder="December 31, 1999"
                  value={value}
                  onChange={setValue}
                  size="md"
                />
              </Grid.Col>

              <Grid.Col xs={6}>
                <PasswordInput
                  label="Password"
                  placeholder="*********"
                  size="md"
                />
              </Grid.Col>

              <Grid.Col xs={6}>
                <PasswordInput
                  label="Confirm Password"
                  placeholder="*********"
                  size="md"
                />
              </Grid.Col>
            </Grid>

            {/* Forgot Password */}
            <div style={{ textAlign: "right" }}>
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </div>

            {/* Checkbox */}
            <Checkbox label="Keep me logged in" mt="md" size="sm" />
            <Group mt={5} className="flex_gap">
              <Checkbox label="I agree to all the" size="sm" />
              <Anchor component="button" size="sm">
                Terms
              </Anchor>
              <span>and</span>
              <Anchor component="button" size="sm">
                Privacy Policy
              </Anchor>
            </Group>

            {/* Buttons */}
            <Grid>
              <Grid.Col xs={6}>
                <Button fullWidth mt="xl" size="md">
                  Create an account
                </Button>
              </Grid.Col>
              <Grid.Col xs={6}>
                <Button fullWidth mt="xl" size="md" color="dark">
                  <Image
                    src={GLogo}
                    height={16}
                    width={16}
                    radius={0}
                    mr={10}
                    withPlaceholder
                    placeholder="Glogo"
                  />
                  Sign-in with google
                </Button>
              </Grid.Col>
            </Grid>

            {/* Footer */}
            <Text ta="center" mt="md" fs="xs" fw="normal">
              Don&apos;t have an account?{" "}
              <Anchor<"a">
                fs="xs"
                fw="normal"
                href="#"
                weight={200}
                onClick={(event) => event.preventDefault()}
              >
                Log in
              </Anchor>
            </Text>

            <Group mt={10}>
              <Image
                className="pay_acc"
                src={GooglePag}
                height={50}
                width={200}
                radius={10}
                withPlaceholder
                placeholder="GooglePay"
              />
              <Image
                className="pay_acc"
                src={ApplePag}
                height={50}
                width={200}
                radius={10}
                withPlaceholder
                placeholder="GooglePay"
              />
            </Group>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default App;
