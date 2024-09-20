'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Behovstype } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Button } from '@navikt/ds-react';
import { FinnSakGrunnlag } from '../../lib/types/types';

interface Props {
  behandlingsVersjon: number;
  journalpostId: string;
  grunnlag: FinnSakGrunnlag;
}
interface FormFields {
  knyttTilSak: string;
}

const nySak = "Ny Sak";

export const FinnSak = ({ behandlingsVersjon, journalpostId, grunnlag}: Props) => {
  const { formFields, form } = useConfigForm<FormFields>({
    knyttTilSak: {
      type: 'radio',
      label: 'Journalfør på sak',
      rules: { required: 'Du må svare på hvilken sak dokumentet skal knyttes til' },
      options: grunnlag.saksinfo.map(saksinfo => saksinfo.saksnummer).concat([nySak]),
    },
  });
  const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('FINN_SAK');
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.FINN_SAK,
          saksnummer: (data.knyttTilSak == nySak) ? null : data.knyttTilSak
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
