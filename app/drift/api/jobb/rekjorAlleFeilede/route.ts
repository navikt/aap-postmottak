import { rekjørFeiledeJobber } from 'lib/services/dokumentmottakservice/dokumentMottakService';
import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';

export async function GET(req: NextRequest) {
  try {
    await rekjørFeiledeJobber();
    return new Response(JSON.stringify({ message: `Jobber startet` }), { status: 200 });
  } catch (error) {
    logError('/api/drift/rekjorAlleFeilede', error);
    return new Response(JSON.stringify({ message: JSON.stringify(error) }), { status: 500 });
  }
}
