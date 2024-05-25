"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserInfoForm from "@/components/modules/cv-builder/info-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Box } from "lucide-react";
import { UserInfoContextProvider } from "@/context/cv-builder/user-info-context";

const CvBuilderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea className="max-h-[1000px]">
      <div className="min-h-[1400px]">{children}</div>
    </ScrollArea>
  );
};

interface CvBuilderProps {}

const CvBuilder: React.FC<CvBuilderProps> = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-5 max-h-screen overflow-hidden">
      <CvBuilderContainer>
        <UserInfoContextProvider>
          <UserInfoForm />
        </UserInfoContextProvider>
      </CvBuilderContainer>
      <CvBuilderContainer>
        <Card className="bg-gray-100">
          <CardHeader>
            <CardTitle>Template</CardTitle>
            <CardDescription>Choose a template for your CV</CardDescription>
          </CardHeader>
          <CardContent>Templates</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </CvBuilderContainer>
    </div>
  );
};

export default CvBuilder;
