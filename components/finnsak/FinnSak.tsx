'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { FormField, useConfigForm, ValuePair } from '@navikt/aap-felles-react';
import { Behovstype } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Button } from '@navikt/ds-react';
import { FinnSakGrunnlag, Saksinfo } from '../../lib/types/types';
import { ServerSentEventStatusAlert } from '../serversenteventstatusalert/ServerSentEventStatusAlert';
import { Nesteknapp } from 'components/nesteknapp/Nesteknapp';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  grunnlag: FinnSakGrunnlag;
}
interface FormFields {
  knyttTilSak: string;
}

const GENERELL = 'GENERELL';
const NY = 'NY';
function mapVurderingTilValgtOption(vurdering: FinnSakGrunnlag['vurdering']) {
  if (vurdering?.opprettNySak) {
    return NY;
  } else if (vurdering?.førPåGenerellSak) {
    return GENERELL;
  } else if (vurdering?.saksnummer) {
    return vurdering.saksnummer;
  } else {
    return undefined;
  }
}
export const FinnSak = ({ behandlingsVersjon, behandlingsreferanse, grunnlag }: Props) => {
  const { formFields, form } = useConfigForm<FormFields>({
    knyttTilSak: {
      type: 'radio',
      label: 'Journalfør på sak',
      rules: { required: 'Du må svare på hvilken sak dokumentet skal knyttes til' },
      defaultValue: mapVurderingTilValgtOption(grunnlag.vurdering),
      options: [
        ...grunnlag.saksinfo.map(mapSaksinfoToValuePair),
        { label: 'Ny sak', value: NY },
        { label: 'Generell Sak', value: GENERELL },
      ],
    },
  });
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
  console.log(grunnlag.vurdering);
  return (
    <VilkårsKort heading={'Finn sak'}>
      <form onSubmit={onSubmit}>
        <ServerSentEventStatusAlert status={status} />
        <FormField form={form} formField={formFields.knyttTilSak} />
        <Nesteknapp>Send inn</Nesteknapp>
      </form>
    </VilkårsKort>
  );
};

function mapSaksinfoToValuePair(saksinfo: Saksinfo): ValuePair {
  return {
    value: saksinfo.saksnummer,
    label: `${saksinfo.saksnummer}: ${saksinfo.periode.fom} - ${saksinfo.periode.tom}`,
  };
}
