'use client'; // Error boundaries must be Client Components

import { BodyShort, Button, Heading } from '@navikt/ds-react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang={'no'}>
      <body>
        <Heading level="2" size="medium" spacing>
          Det har oppstått en feil 🙃.
        </Heading>
        <BodyShort>{error?.message}</BodyShort>
        <Button type={'button'} onClick={() => reset()}>
          Prøv igjen
        </Button>
      </body>
    </html>
  );
}
