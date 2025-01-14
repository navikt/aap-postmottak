'use client';

import { useEffect, useState } from 'react';
import { Button, HStack } from '@navikt/ds-react';
import { Dokument } from 'lib/types/types';

interface Props {
  journalpostId: number;
  dokumenter: Dokument[];
}

export const Dokumentvisning = ({ journalpostId, dokumenter }: Props) => {
  const [valgtDokumentIndex, setValgtDokumentIndex] = useState<number>(0);
  const [dataUri, setDataUri] = useState<string>();
  useEffect(() => {
    const hentDokument = async (dokumentInfoId: string) => {
      fetch(`/api/post/dokumenter/${journalpostId}/${dokumentInfoId}`, { method: 'GET' })
        .then((res) => res.blob())
        .then((blob: Blob) => {
          let reader = new FileReader();
          reader.readAsDataURL(blob);
          new Promise((res) => {
            reader.onloadend = function () {
              res(reader.result);
            };
          }).then((dataUri) => setDataUri(dataUri as string));
        });
    };
    const dokumentinfoId = dokumenter[valgtDokumentIndex]?.dokumentInfoId;
    if (dokumentinfoId) {
      hentDokument(dokumentinfoId);
    }
  }, [valgtDokumentIndex]);
  return (
    <div>
      <HStack gap={'1'} padding={'1'}>
        {dokumenter.map((dokument, index) => (
          <Button
            key={dokument.dokumentInfoId}
            onClick={() => setValgtDokumentIndex(index)}
            type={'button'}
            size={'small'}
          >
            {dokument.tittel}
          </Button>
        ))}
      </HStack>
      {dataUri && (
        <object data={`${dataUri}#toolbar=0`} type="application/pdf" width="100%" height="100%">
          <p>
            Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
          </p>
        </object>
      )}
    </div>
  );
};
