import { DigitaliserSøknad} from "./søknad/DigitaliserSøknad";
import {hentDigitaliseringGrunnlag, hentFlyt} from "../../lib/services/dokumentmottakservice/dokumentMottakService";

interface Props {
    journalpostId: string;
}
export const DigitaliserDokumentMedDatafetching = async ({ journalpostId }: Props) => {
    const flyt = await hentFlyt(journalpostId);
    const grunnlag = await hentDigitaliseringGrunnlag(journalpostId);
    console.log('digitalisering', grunnlag)
        if(grunnlag.kategori === 'SØKNAD') {
            return <DigitaliserSøknad journalpostId={journalpostId} behandlingsVersjon={flyt.behandlingVersjon}/>
        }
}