import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
