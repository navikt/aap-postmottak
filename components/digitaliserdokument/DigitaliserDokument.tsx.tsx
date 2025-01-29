'use client';

import { Kategoriser } from './kategoriser/Kategoriser';
import { DigitaliseringsGrunnlag, KategoriserDokumentKategori } from '../../lib/types/types';
import { useState } from 'react';
import { DigitaliserSøknad } from './søknad/DigitaliserSøknad';
import { DigitaliserMeldekort } from './meldekort/DigitaliserMeldekort';
import { Behovstype } from '../../lib/form';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  grunnlag: DigitaliseringsGrunnlag;
  readOnly: boolean;
}

export interface Submittable {
  submit: (kategori: KategoriserDokumentKategori, jsonString: string | null) => void;
}

export const DigitaliserDokument = ({ behandlingsVersjon, behandlingsreferanse, grunnlag, readOnly }: Props) => {
  const [kategori, setKategori] = useState<KategoriserDokumentKategori | undefined>(grunnlag.vurdering?.kategori);
  const { løsBehovOgGåTilNesteSteg, status } = useLøsBehovOgGåTilNesteSteg('DIGITALISER_DOKUMENT');

  function handleSubmit(kategori: KategoriserDokumentKategori, jsonString: string | null) {
    løsBehovOgGåTilNesteSteg({
      behandlingVersjon: behandlingsVersjon,
      behov: {
        behovstype: Behovstype.DIGITALISER_DOKUMENT,
        kategori: kategori,
        strukturertDokument: jsonString,
      },
      // @ts-ignore
      referanse: behandlingsreferanse,
    });
  }

  return (
    <>
      <Kategoriser
        submit={handleSubmit}
        kategori={kategori}
        readOnly={readOnly}
        onKategoriChange={setKategori}
        status={status}
      />
      {kategori === 'SØKNAD' && <DigitaliserSøknad submit={handleSubmit} grunnlag={grunnlag} readOnly={readOnly} />}
      {kategori === 'PLIKTKORT' && (
        <DigitaliserMeldekort
          submit={handleSubmit}
          behandlingsVersjon={behandlingsVersjon}
          behandlingsreferanse={behandlingsreferanse}
          readOnly={readOnly}
        />
      )}
    </>
  );
};
