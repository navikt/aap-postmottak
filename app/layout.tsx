import '@navikt/ds-css';
import '@navikt/aap-felles-css';
import 'styles/globals.css';

import type { Metadata } from 'next';

import { hentBrukerInformasjon, verifyUserLoggedIn } from '@navikt/aap-felles-utils';
import { KelvinAppHeader } from '@navikt/aap-felles-react';

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
        <KelvinAppHeader brukerInformasjon={brukerInformasjon} />
        {children}
      </body>
    </html>
  );
}
