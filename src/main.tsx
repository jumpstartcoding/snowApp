import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@aws-amplify/ui-react/styles.css";
import ScrollToTop from "../components/ScrollToTop";
import {
  Authenticator,
  Button,
  Heading,
  useAuthenticator,
  useTheme,
  View,
  Image,
  Text,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
// Import Components
import NavBar from "../components/NavBar";
import HomePage from "../components/HomePage";
import NotFound from "../components/NotFound";
import ResCalendar from "../components/Calendar";
import Reservations from "../components/Reservations";
import InstructorRes from "../components/InstructorRes";
import "/components/SignIn.css";

Amplify.configure(config);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://img.freepik.com/free-vector/initial-gradient-design-vector_343694-2504.jpg"
          style={{
            width: "150px",
          }}
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signUp: {
    given_name: {
      isRequired: true,
      order: 1,
      placeholder: "Enter First Name",
      label: "First Name",
    },
    family_name: {
      isRequired: true,
      order: 2,
      placeholder: "Enter Last Name",
      label: "Last Name",
    },

    phone_number: {
      isRequired: true,
      order: 3,
    },
  },
};

const router = createBrowserRouter([
  {
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        element: (
          <NavBar>
            <Outlet />
            <ScrollToTop />
          </NavBar>
        ),
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/home",
            element: <HomePage />,
          },
          {
            path: "/calendar",
            element: <ResCalendar />,
          },
          {
            path: "/reservations",
            element: <Reservations />,
          },
          {
            path: "/admin",
            element: <InstructorRes />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Authenticator
      variation="modal" //full screen
      components={components}
      formFields={formFields}
      socialProviders={["google"]}
    >
      <RouterProvider router={router} />
    </Authenticator>
  </React.StrictMode>
);
