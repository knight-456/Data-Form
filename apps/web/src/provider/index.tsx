import { Suspense } from "react";

import AuthProvider from "./auth.provider";
import StoreProvider from "./store.provider";
import ThemeProvider from "./theme.provider";
import ModalProvider from "./modal.provider";
import LayoutProvider from "./layout.provider";

type TProvider = {
  children: React.ReactNode;
};

const Provider = ({ children }: TProvider) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <StoreProvider>
          <ThemeProvider>
            <ModalProvider>
              <LayoutProvider>
                {children}
              </LayoutProvider>
            </ModalProvider>
          </ThemeProvider>
        </StoreProvider>
      </AuthProvider>
    </Suspense>
  );
};

export default Provider;

