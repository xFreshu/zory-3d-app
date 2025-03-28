import type { Metadata } from 'next';
import ChakraWrapper from '../lib/chakra-provider';

export const metadata: Metadata = {
  title: 'Żory 3D',
  description: 'Responsywna aplikacja z Google API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
