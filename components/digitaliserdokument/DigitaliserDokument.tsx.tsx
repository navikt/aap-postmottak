'use client';

import { Kategoriser } from './kategoriser/Kategoriser';
import { DigitaliseringsGrunnlag, KategoriserDokumentKategori } from '../../lib/types/types';
import { useState } from 'react';
import { DigitaliserSøknad } from './søknad/DigitaliserSøknad';
import { DigitaliserMeldekort } from './meldekort/DigitaliserMeldekort';
import { Behovstype } from '../../lib/form';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';
import { formaterDatoForBackend } from '../../lib/utils/date';
import { DigitaliserAnnetRelevantDokument } from './annetrelevantdokument/DigitaliserAnnetRelevantDokument';
import { VStack } from '@navikt/ds-react';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  grunnlag: DigitaliseringsGrunnlag;
  readOnly: boolean;
}

export interface Submittable {
  submit: (kategori: KategoriserDokumentKategori, jsonString: string | null, søknadsdato: Date | null) => void;
}

export const DigitaliserDokument = ({ behandlingsVersjon, behandlingsreferanse, grunnlag, readOnly }: Props) => {
  const [kategori, setKategori] = useState<KategoriserDokumentKategori | undefined>(grunnlag.vurdering?.kategori);
  const { løsBehovOgGåTilNesteSteg, status } = useLøsBehovOgGåTilNesteSteg('DIGITALISER_DOKUMENT');

  function handleSubmit(kategori: KategoriserDokumentKategori, jsonString: string | null, søknadsdato: Date | null) {
    løsBehovOgGåTilNesteSteg({
      behandlingVersjon: behandlingsVersjon,
      behov: {
        behovstype: Behovstype.DIGITALISER_DOKUMENT,
        kategori: kategori,
        strukturertDokument: jsonString,
        søknadsdato: søknadsdato && formaterDatoForBackend(søknadsdato),
      },
      // @ts-ignore
      referanse: behandlingsreferanse,
    });
  }

  return (
    <VStack padding={'4'} gap={'4'}>
      <Kategoriser
        submit={handleSubmit}
        kategori={kategori}
        readOnly={readOnly}
        onKategoriChange={setKategori}
        status={status}
      />
      {kategori === 'SØKNAD' && <DigitaliserSøknad submit={handleSubmit} grunnlag={grunnlag} readOnly={readOnly} />}
      {kategori === 'MELDEKORT' && (
        <DigitaliserMeldekort
          submit={handleSubmit}
          behandlingsVersjon={behandlingsVersjon}
          behandlingsreferanse={behandlingsreferanse}
          readOnly={readOnly}
        />
      )}
      {kategori === 'ANNET_RELEVANT_DOKUMENT' && (
        <DigitaliserAnnetRelevantDokument submit={handleSubmit} grunnlag={grunnlag} readOnly={readOnly} />
      )}
    </VStack>
  );
};
