'use client'

import { Button } from '@navikt/ds-react';
import { rekjørFeiledeJobber } from 'lib/clientApi';


export const RekjørFeilede = () => {
  return <Button onClick={() => rekjørFeiledeJobber()}>Rekjør feilede jobber</Button>
}
