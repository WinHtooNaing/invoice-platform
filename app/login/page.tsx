import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center px-4">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="" className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <Label>Email</Label>
              <Input placeholder="blabla@gmail.com" />
            </div>
            <Button>Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
