'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { FormField, useConfigForm, ValuePair } from '@navikt/aap-felles-react';
import { Behovstype } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { FinnSakGrunnlag, Saksinfo } from '../../lib/types/types';
import { ServerSentEventStatusAlert } from '../serversenteventstatusalert/ServerSentEventStatusAlert';
import { Nesteknapp } from 'components/nesteknapp/Nesteknapp';
import { HStack, VStack } from '@navikt/ds-react';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  grunnlag: FinnSakGrunnlag;
  readOnly: boolean;
}

interface FormFields {
  knyttTilSak: string;
}

const GENERELL = 'GENERELL';
const NY = 'NY';

function mapVurderingTilValgtOption(vurdering: FinnSakGrunnlag['vurdering']) {
  if (vurdering?.førPåGenerellSak) {
    return GENERELL;
  } else if (vurdering?.saksnummer) {
    return vurdering.saksnummer;
  } else {
    return undefined;
  }
}

export const FinnSak = ({ behandlingsVersjon, behandlingsreferanse, grunnlag, readOnly }: Props) => {
  const nySakOption = grunnlag.saksinfo.length === 0 ? [{ label: 'Ny sak', value: NY }] : [];
  const { formFields, form } = useConfigForm<FormFields>(
    {
      knyttTilSak: {
        type: 'radio',
        label: 'Journalfør dokumentet på sak',
        rules: { required: 'Du må svare på hvilken sak dokumentet skal knyttes til' },
        defaultValue: mapVurderingTilValgtOption(grunnlag.vurdering),
        options: [
          ...nySakOption,
          ...grunnlag.saksinfo.map(mapSaksinfoToValuePair),
          { label: 'Generell Sak', value: GENERELL },
        ],
      },
    },
    { readOnly }
  );
  const { løsBehovOgGåTilNesteSteg, status } = useLøsBehovOgGåTilNesteSteg('AVKLAR_SAK');
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.FINN_SAK,
          opprettNySak: data.knyttTilSak === NY,
          førPåGenerellSak: data.knyttTilSak === GENERELL,
          saksnummer: data.knyttTilSak === NY || data.knyttTilSak === GENERELL ? null : data.knyttTilSak,
        },
        // @ts-ignore
        referanse: behandlingsreferanse,
      });
    })(event);
  };
  return (
    <VStack padding={'4'} gap={'4'}>
      <VilkårsKort heading={'Avklar sak'}>
        <form onSubmit={onSubmit}>
          <VStack gap={'6'}>
            <ServerSentEventStatusAlert status={status} />
            <FormField form={form} formField={formFields.knyttTilSak} />
            <Nesteknapp disabled={readOnly}>Send inn</Nesteknapp>
          </VStack>
        </form>
      </VilkårsKort>
    </VStack>
  );
};

function mapSaksinfoToValuePair(saksinfo: Saksinfo): ValuePair {
  return {
    value: saksinfo.saksnummer,
    label: `${saksinfo.saksnummer}: ${saksinfo.periode.fom} - ${saksinfo.periode.tom}`,
  };
}
