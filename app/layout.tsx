import '@navikt/ds-css';
import '@navikt/aap-felles-css';
import 'styles/globals.css';

import type { Metadata } from 'next';

import { hentBrukerInformasjon, verifyUserLoggedIn } from '@navikt/aap-felles-utils';
import {AppHeader} from "components/appheader/AppHeader";
import styles from './layout.module.css'

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
        <div className={styles.bodyWrapper}>
          <AppHeader brukerInformasjon={brukerInformasjon} />
          {children}
        </div>
      </body>
    </html>
  );
}
