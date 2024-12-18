"use client";

import Layout from './Layout';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import { supabase } from '../lib/supabaseClient'; // Import Supabase client

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleOAuthLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) {
        console.error(`Error logging in with ${provider}:`, error.message);
      } else {
        console.log(`Successfully logged in with ${provider}`);
      }
    } catch (err) {
      console.error('Unexpected error during OAuth login:', err);
    }
  };

  return (
    <Layout>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          {isLogin ? 'Login to Investment Advisor' : 'Sign up for Investment Advisor'}
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {isLogin ? 'Login to access your account' : 'Create an account to join Investment Advisor'}
        </p>

        <Tabs
          defaultValue="login"
          onValueChange={(value) => setIsLogin(value === 'login')}
          className="my-8"
        >
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <AuthForm isLogin={true} />
            <div className="text-center font-medium text-sm text-neutral-600 dark:text-neutral-300 my-4">
              or login with
            </div>
            <OAuthButtons handleOAuthLogin={handleOAuthLogin} />
          </TabsContent>

          {/* Sign Up Tab */}
          <TabsContent value="signup">
            <AuthForm isLogin={false} />
            <div className="text-center font-medium text-sm text-neutral-600 dark:text-neutral-300 my-4">
              or sign up with
            </div>
            <OAuthButtons handleOAuthLogin={handleOAuthLogin} />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

const AuthForm = ({ isLogin }) => (
  <form className="my-8">
    {!isLogin && (
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" placeholder="Your first name" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" placeholder="Your last name" type="text" />
        </LabelInputContainer>
      </div>
    )}
    <LabelInputContainer className="mb-4">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" placeholder="you@example.com" type="email" required />
    </LabelInputContainer>
    <LabelInputContainer className="mb-4">
      <Label htmlFor="password">Password</Label>
      <Input id="password" placeholder="••••••••" type="password" required />
    </LabelInputContainer>

    <button
      className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      type="submit"
    >
      {isLogin ? 'Log In' : 'Sign Up'} &rarr;
      <BottomGradient />
    </button>
  </form>
);

const OAuthButtons = ({ handleOAuthLogin }) => (
  <div className="flex flex-col space-y-4">
    <button
      className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      type="button"
      onClick={() => handleOAuthLogin('github')}
    >
      <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        GitHub
      </span>
      <BottomGradient />
    </button>
    <button
      className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      type="button"
      onClick={() => handleOAuthLogin('google')}
    >
      <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        Google
      </span>
      <BottomGradient />
    </button>
  </div>
);

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>
);

export default AuthPage;