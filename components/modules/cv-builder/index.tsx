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

interface CvBuilderProps {}

const CvBuilder: React.FC<CvBuilderProps> = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-5">
      <UserInfoForm />
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Template</CardTitle>
          <CardDescription>Choose a template for your CV</CardDescription>
        </CardHeader>
        <CardContent>Templates</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default CvBuilder;
