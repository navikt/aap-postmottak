'use client';

import React from 'react';
import { BodyShort, Label } from '@navikt/ds-react';
import { HourglassBottomFilledIcon } from '@navikt/aksel-icons';
import { SettPåVentÅrsaker, Venteinformasjon } from 'lib/types/types';
import { formaterDatoForFrontend } from 'lib/utils/date';
import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { exhaustiveCheck } from 'lib/utils/typescript';

interface Props {
  informasjon?: Venteinformasjon;
}

export const BehandlingPåVentKort = ({ informasjon }: Props) => {
  return (
    <VilkårsKort heading={'Behandling på vent'} icon={<HourglassBottomFilledIcon />}>
      <div className={'flex-column'}>
        {informasjon && (
          <>
            <div>
              <Label>Begrunnelse</Label>
              <BodyShort>{informasjon?.begrunnelse}</BodyShort>
            </div>
            <div>
              <Label>Frem til</Label>
              <BodyShort>{formaterDatoForFrontend(informasjon?.frist)}</BodyShort>
            </div>
            <div>
              <Label>Årsak</Label>
              <BodyShort>{mapÅrsakerTilString(informasjon.grunn)}</BodyShort>
            </div>
          </>
        )}
      </div>
    </VilkårsKort>
  );
};

function mapÅrsakerTilString(årsak: SettPåVentÅrsaker): string {
  switch (årsak) {
    case 'VENTER_PÅ_VURDERING_AV_ROL':
      return 'Venter på vurdering av rådgivende overlege';
    case 'VENTER_PÅ_MEDISINSKE_OPPLYSNINGER':
      return 'Venter på medisinske opplysninger';
    case 'VENTER_PÅ_OPPLYSNINGER':
      return 'Venter på opplysninger';
    case 'VENTER_PÅ_SVAR_FRA_BRUKER':
      return 'Venter på svar fra bruker';
    case 'VENTER_PÅ_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER':
      return 'Venter på opplysninger fra utenlandske myndigheter';
  }
  exhaustiveCheck(årsak);
}
