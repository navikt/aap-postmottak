import '@navikt/ds-css';
import '@navikt/aap-felles-css';
import 'styles/globals.css';

import type { Metadata } from 'next';

import { hentBrukerInformasjon } from '@navikt/aap-felles-utils';
import styles from './layout.module.css';
import { KelvinAppHeader } from '@navikt/aap-felles-react/cjs/KelvinAppHeader/KelvinAppHeader';

export const metadata: Metadata = {
  title: 'Kelvin Postmottak',
  description: 'Postmottak for AAP',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brukerInformasjon = await hentBrukerInformasjon();

  return (
    <html lang="nb">
      <body>
        <div className={styles.bodyWrapper}>
          <KelvinAppHeader brukerInformasjon={brukerInformasjon} />
          {children}
        </div>
      </body>
    </html>
  );
}
