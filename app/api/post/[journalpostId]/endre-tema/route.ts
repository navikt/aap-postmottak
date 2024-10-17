import { NextRequest } from 'next/server';
import { endreTema } from '../../../../../lib/services/dokumentmottakservice/dokumentMottakService';
import { logError } from '@navikt/aap-felles-utils';


export async function POST(req: NextRequest, { params }: { params: { journalpostId: string } }) {
  try {
    const data = await endreTema(params.journalpostId);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    logError('error i route', error);
    return new Response(JSON.stringify({ message: JSON.stringify(error) }), { status: 500 });
  }
}
