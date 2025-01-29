'use client';

import { VilkårsKort } from '../../vilkårskort/VilkårsKort';
import { FormField, useConfigForm } from '@navikt/aap-felles-react';
import { FormEvent } from 'react';
import { KategoriserDokumentKategori, Søknad } from '../../../lib/types/types';
import { Nesteknapp } from 'components/nesteknapp/Nesteknapp';
import { Submittable } from 'components/digitaliserdokument/DigitaliserDokument.tsx';
import { ServerSentEventStatusAlert } from 'components/serversenteventstatusalert/ServerSentEventStatusAlert';
import { ServerSentEventStatus } from 'app/api/post/[behandlingsreferanse]/hent/[gruppe]/[steg]/nesteSteg/route';

interface Props extends Submittable {
  kategori?: KategoriserDokumentKategori;
  readOnly: boolean;
  onKategoriChange: (kategori: KategoriserDokumentKategori) => void;
  status: ServerSentEventStatus | undefined;
}
interface FormFields {
  kategori: KategoriserDokumentKategori;
}
const kategorier: { label: string; value: KategoriserDokumentKategori }[] = [
  {
    label: 'Aktivitetskort',
    value: 'AKTIVITETSKORT',
  },
  {
    label: 'Søknad',
    value: 'SØKNAD',
  },
  {
    label: 'Meldekort',
    value: 'PLIKTKORT',
  },
  {
    label: 'Dialogmelding',
    value: 'DIALOGMELDING',
  },
  {
    label: 'Legeerklæring',
    value: 'LEGEERKLÆRING',
  },
  {
    label: 'Legeerklæring avvist',
    value: 'LEGEERKLÆRING_AVVIST',
  },
];

export const Kategoriser = ({ kategori, readOnly, submit, onKategoriChange, status }: Props) => {
  const { formFields, form } = useConfigForm<FormFields>(
    {
      kategori: {
        type: 'combobox',
        label: 'Velg kategori for dokument',
        rules: { required: 'Du må velge kategori' },
        options: kategorier,
        defaultValue: kategori,
      },
    },
    { readOnly }
  );
  form.watch((value) => value.kategori && onKategoriChange(value.kategori));

  return (
    <VilkårsKort heading={'Kategoriser'}>
      <form onSubmit={form.handleSubmit((data) => submit(data.kategori, null))}>
        <ServerSentEventStatusAlert status={status} />
        <FormField form={form} formField={formFields.kategori} />
        {kategori !== 'SØKNAD' && kategori !== 'PLIKTKORT' && <Nesteknapp>Send Inn</Nesteknapp>}
      </form>
    </VilkårsKort>
  );
};
