'use client'

import { Kategoriser } from './kategoriser/Kategoriser';
import { KategoriserDokumentKategori, StruktureringGrunnlag } from '../../lib/types/types';
import { useEffect, useRef, useState } from 'react';
import { DigitaliserSøknad } from './søknad/DigitaliserSøknad';
import { DigitaliserMeldekort } from './meldekort/DigitaliserMeldekort';
import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { Nesteknapp } from '../nesteknapp/Nesteknapp';
import { Behovstype } from '../../lib/form';
import { useLøsBehovOgGåTilNesteSteg } from '../../lib/hooks/LøsBehovOgGåTilNesteStegHook';

interface Props {
  behandlingsVersjon: number;
  behandlingsreferanse: string;
  grunnlag: StruktureringGrunnlag;
  readOnly: boolean;
}

export interface Submittable {
  submit: (setDokumentJson: setDokumentJson) => void
}

export type setDokumentJson = (json:string) => void

export const DigitaliserDokument = ({ behandlingsVersjon, behandlingsreferanse, grunnlag, readOnly }: Props) => {
  const [isSubmited, setIsSubmitted] = useState(false)
  const [kategori, setKategori] = useState<KategoriserDokumentKategori>(grunnlag.kategori);
  const [dokumentJson, setDokumentJson] = useState<string>()
  const digitaliseringRef = useRef<Submittable>(null)
  const { løsBehovOgGåTilNesteSteg, status } = useLøsBehovOgGåTilNesteSteg('DIGITALISER_DOKUMENT');

  const onSubmit = () =>  {
    digitaliseringRef.current?.submit((json: string) => {
      setDokumentJson(json);
      setIsSubmitted(true)
    });
  }

  useEffect(() => {
      løsBehovOgGåTilNesteSteg({
        behandlingVersjon: behandlingsVersjon,
        behov: {
          behovstype: Behovstype.DIGITALISER_DOKUMENT,
          kategori: kategori,
          strukturertDokument: dokumentJson,
        },
        // @ts-ignore
        referanse: behandlingsreferanse,
      });
  }, [isSubmited])

  return (
    <>
      <Kategoriser kategori={kategori} onKategoriChange={setKategori} readOnly={readOnly} />
      {kategori === "SØKNAD" &&
        <DigitaliserSøknad
          ref={digitaliseringRef}
          grunnlag={grunnlag}
          readOnly={readOnly}/>}
      {kategori === "PLIKTKORT" &&
        <DigitaliserMeldekort
          ref={digitaliseringRef}
          behandlingsVersjon={behandlingsVersjon} behandlingsreferanse={behandlingsreferanse} readOnly={readOnly}/>}
      <Nesteknapp onClick={onSubmit}>Send Inn</Nesteknapp>
    </>
  );
};
