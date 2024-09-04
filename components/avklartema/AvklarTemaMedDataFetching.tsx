import {AvklarTema} from "./AvklarTema";
import {hentFlyt} from "../../lib/services/dokumentmottakservice/dokumentMottakService";
interface Props {
    id: string;
}
export const AvklarTemaMedDataFetching = async ({id}: Props) => {
    const flyt = await hentFlyt(id)
    return <AvklarTema behandlingsVersjon={flyt.behandlingVersjon} id={id}/>
}