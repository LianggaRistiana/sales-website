import React, { useState } from "react";
import { Card, CardBody, CardFooter, Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router"; // Import useRouter from Next.js to handle navigation

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Check if the username and password are correct
    if (username === "admin@gmail.com" && password === "admin") {
      setAuthenticated(true);
    }
  };

  // Redirect to a different page upon successful login
  if (authenticated) {
    router.push("admin/NavbarComponent"); // Replace "/dashboard" with the actual path of your desired page
    return null; // Return null to prevent rendering the login form after successful login
  }

  return (
    <div className="bg-slate-200 min-h-screen flex justify-center items-center">
      <Card className="flex flex-col gap-1">
        <CardBody className="my-4">
          <Input
            className="mb-4 w-96"
            autoFocus
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardBody>
        <CardFooter>
          <Button color="primary" onClick={handleLogin}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

