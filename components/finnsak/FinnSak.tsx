'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import {FormField, useConfigForm, ValuePair} from '@navikt/aap-felles-react';
import { Behovstype } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Button } from '@navikt/ds-react';
import {FinnSakGrunnlag, Saksinfo} from '../../lib/types/types';

interface Props {
  behandlingsVersjon: number;
  journalpostId: string;
  grunnlag: FinnSakGrunnlag;
}
interface FormFields {
  knyttTilSak: string;
}

export const FinnSak = ({ behandlingsVersjon, journalpostId, grunnlag}: Props) => {
  const { formFields, form } = useConfigForm<FormFields>({
    knyttTilSak: {
      type: 'radio',
      label: 'Journalfør på sak',
      rules: { required: 'Du må svare på hvilken sak dokumentet skal knyttes til' },
      options: [
          { label: 'Ny sak', value: 'NY'},
          ...grunnlag.saksinfo.map(mapSaksinfoToValuePair)
          ],
    },
  });
  const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('FINN_SAK');
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.FINN_SAK,
          saksnummer: data.knyttTilSak === 'NY' ? null : data.knyttTilSak
        },
        //TODO: dette skal være referanse: string
        // @ts-ignore
        referanse: parseInt(journalpostId),
      });
    })(event);
  };
  return (
    <VilkårsKort heading={'Finn sak'}>
      <form onSubmit={onSubmit}>
        <FormField form={form} formField={formFields.knyttTilSak} />
        <Button>Send</Button>
      </form>
    </VilkårsKort>
  );
};

function mapSaksinfoToValuePair(saksinfo: Saksinfo): ValuePair {
  return {
    value: saksinfo.saksnummer,
    label: `${saksinfo.saksnummer}: ${saksinfo.periode.fom} - ${saksinfo.periode.tom}`};
}