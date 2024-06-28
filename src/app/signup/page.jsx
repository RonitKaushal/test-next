// src/app/signup/page.jsx
"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom";

import { Toaster, toast } from 'sonner'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        alert('User registered successfully');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>

<div className="LogCompo_center">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
      <form onSubmit={handleSubmitRegister}>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login to your account here. Click continue when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Please enter your email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Please enter your password" name="password" value={formData.password} onChange={handleChange} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Continue</Button>
          </CardFooter>
        </Card>
        </form>
      </TabsContent>
      <TabsContent value="password">
      <form onSubmit={handleSubmitRegister}>
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Register here. After saving, you'll be logged in!.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Please enter your name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Please enter your email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Please enter your password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Continue</Button>
          </CardFooter>
        </Card>
        </form>
      </TabsContent>
    </Tabs>
    <Toaster />
    </div>
    </div>
  );
}
