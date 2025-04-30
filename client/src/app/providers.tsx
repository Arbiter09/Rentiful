"use client";

import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "./(auth)/authProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Authenticator>
        <Auth>{children}</Auth>
      </Authenticator>
    </StoreProvider>
  );
};

export default Providers;
