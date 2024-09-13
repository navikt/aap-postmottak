'use client'

import {useEffect, useState} from "react";
import {Dokument} from "../../lib/types/types";
import {Button} from "@navikt/ds-react";

interface Props {
    journalpostId: string;
    dokumenter: Dokument[]
}

export const Dokumentvisning = ({ journalpostId, dokumenter }: Props ) => {
    const [valgtDokumentIndex, setValgtDokumentIndex] = useState<number>(0);
    const [dataUri, setDataUri] = useState<string>();
    useEffect(() => {
        const hentDokument = async (dokumentInfoId: string) => {
            fetch(`/api/post/${journalpostId}/dokumenter/${dokumentInfoId}`, {method: 'GET'})
                .then(res => res.blob())
                .then((blob: Blob) => {
                    let reader = new FileReader();
                    reader.readAsDataURL(blob);
                    new Promise((res) => {
                        reader.onloadend = function () {
                            res(reader.result);
                        }
                    }).then(dataUri => setDataUri(dataUri as string));
                })
        }
        const dokumentinfoId = dokumenter[valgtDokumentIndex]?.dokumentInfoId;
        if(dokumentinfoId) {
            hentDokument(dokumentinfoId);
        }
    }, [valgtDokumentIndex])
  return (
    <div>
        <div>{dokumenter.map((dokument, index) => <Button
            key={dokument.dokumentInfoId}
            onClick={() => setValgtDokumentIndex(index)}
            type={'button'}
            size={'small'}
            >
            {dokument.tittel}
        </Button>)}</div>
            {dataUri && <object data={dataUri} type="application/pdf" width="100%" height="100%">
        <p>
          Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object>}
    </div>
  );
};
