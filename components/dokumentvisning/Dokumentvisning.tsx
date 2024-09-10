'use client'

import {useEffect, useState} from "react";

interface Props {
    journalpostId: string;
    dokumentInfoId: string
}

export const Dokumentvisning = ({ journalpostId, dokumentInfoId }: Props ) => {
    const [blob, setBlob] = useState<Blob>();
    useEffect(() => {
        const hentDokument = async () => {
            fetch(`/api/post/${journalpostId}/dokumenter/${dokumentInfoId}`, {method: 'GET'})
                .then(res => res.blob())
                .then((blob: Blob) => setBlob(blob))
        }
        hentDokument();
    }, [])
  return (
    <div>
        {blob && <object data={URL.createObjectURL(blob)} type="application/pdf" width="100%" height="100%">
        <p>
          Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object>}
    </div>
  );
};
