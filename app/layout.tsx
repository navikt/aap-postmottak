import '@navikt/ds-css';
import '@navikt/aap-felles-css';
import 'styles/globals.css';

import type { Metadata } from 'next';

import { hentBrukerInformasjon, verifyUserLoggedIn } from '@navikt/aap-felles-utils';
import {AppHeader} from "components/appheader/AppHeader";

export const metadata: Metadata = {
  title: 'Kelvin Postmottak',
  description: 'Postmottak for AAP',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await verifyUserLoggedIn();
  const brukerInformasjon = await hentBrukerInformasjon();

  return (
    <html lang="nb">
      <body>
        <AppHeader brukerInformasjon={brukerInformasjon} />
        {children}
      </body>
    </html>
  );
}
