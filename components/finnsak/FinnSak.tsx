'use client';

import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Behovstype } from '../../lib/form';
import { FormEvent, FormEventHandler } from 'react';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { Button } from '@navikt/ds-react';

interface Props {
  behandlingsVersjon: number;
  journalpostId: string;
}
interface FormFields {
  knyttTilSak: string;
}
export const FinnSak = ({ behandlingsVersjon, journalpostId}: Props) => {
  const { formFields, form } = useConfigForm<FormFields>({
    knyttTilSak: {
      type: 'radio',
      label: 'Journalfør på sak',
      rules: { required: 'Du må svare på hvilken sak dokumentet skal knyttes til' },
      options: ['Aap ordinær: 124355','Aap etablering av egen bedrift: 456456532', 'Ny sak'],
    },
  });
  const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('AVKLAR_TEMA');
  const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.FINN_SAK,
          // TODO: send med knyttTilSak
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
