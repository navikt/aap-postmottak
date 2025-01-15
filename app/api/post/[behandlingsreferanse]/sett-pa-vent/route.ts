import { settPåVent } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { SettPåVentRequest } from 'lib/types/types';

export async function POST(req: NextRequest, props: { params: Promise<{ behandlingsreferanse: string }> }) {
  const params = await props.params;
  const body: SettPåVentRequest = await req.json();

  try {
    const settPåVentResponse = await settPåVent(params.behandlingsreferanse, body);
    console.log('SETT PÅ VENT');
    console.log(settPåVentResponse);

    return new Response(JSON.stringify(settPåVentResponse ?? {}), { status: 200 });
  } catch (error) {
    logError('/api/post/sett-pa-vent', error);
    return new Response(JSON.stringify({ message: JSON.stringify(error) }), { status: 500 });
  }
}
