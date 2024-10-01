'use client';

import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { Button } from '@navikt/ds-react';
import { FormEvent } from 'react';
import { Behovstype } from '../../../lib/form';
import { useLøsBehovOgGåTilNesteSteg } from '../../../lib/hooks/LøsBehovOgGåTilNesteStegHook';

interface Props {
  behandlingsVersjon: number;
  journalpostId: string;
}
interface PliktkortFormFields {
  innsendtDato?: Date;
}
export const DigitaliserPliktkort = ({ behandlingsVersjon, journalpostId }: Props) => {
  const { form, formFields } = useConfigForm<PliktkortFormFields>({
    innsendtDato: {
      type: 'date',
      label: 'Innsendt dato',
    },
  });
  const { løsBehovOgGåTilNesteSteg } = useLøsBehovOgGåTilNesteSteg('DIGITALISER_DOKUMENT');

  function mapTilPliktkortKontrakt(data: PliktkortFormFields) {
    return JSON.stringify(data);
  }
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    form.handleSubmit((data) => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.DIGITALISER_DOKUMENT,
          strukturertDokument: mapTilPliktkortKontrakt(data),
        },
        //TODO: dette skal være referanse: string
        // @ts-ignore
        referanse: parseInt(journalpostId),
      });
    })(event);
  }
  return (
    <VilkårsKort heading={'Pliktkort'}>
      <form onSubmit={onSubmit}>
        <FormField form={form} formField={formFields.innsendtDato} />
        <Button>Send</Button>
      </form>
    </VilkårsKort>
  );
};
