'use client'

import { Kategoriser } from './kategoriser/Kategoriser';
import { KategoriserDokumentKategori, StruktureringGrunnlag } from '../../lib/types/types';
import { useRef, useState } from 'react';
import { DigitaliserSøknad } from './søknad/DigitaliserSøknad';
import { DigitaliserMeldekort } from './meldekort/DigitaliserMeldekort';
import { VilkårsKort } from '../vilkårskort/VilkårsKort';
import { Nesteknapp } from '../nesteknapp/Nesteknapp';

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
  const [kategori, setKategori] = useState<KategoriserDokumentKategori>(grunnlag.kategori);
  const [dokumentJson, setDokumentJson] = useState<string>("null")
  const digitaliseringRef = useRef<Submittable>(null)

  const onSubmit = () =>  {
    digitaliseringRef.current?.submit((json: string) => setDokumentJson(json))
    // todo send inn
  }

  return (
    <>
      <Kategoriser kategori={kategori} onKategoriChange={setKategori} readOnly={readOnly} />
      {kategori === "SØKNAD" && <DigitaliserSøknad ref={digitaliseringRef}
          behandlingsVersjon={behandlingsVersjon} behandlingsreferanse={behandlingsreferanse} grunnlag={grunnlag} readOnly={readOnly}/>}
      {kategori === "PLIKTKORT" && <DigitaliserMeldekort ref={digitaliseringRef}
        behandlingsVersjon={behandlingsVersjon} behandlingsreferanse={behandlingsreferanse} readOnly={readOnly}/>}
      <Nesteknapp onClick={onSubmit}>Send Inn</Nesteknapp>
    </>
  );
};
