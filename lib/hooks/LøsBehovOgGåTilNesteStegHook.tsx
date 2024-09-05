import { useState } from 'react';
import { ServerSentEventData, ServerSentEventStatus } from 'app/api/post/[id]/hent/[gruppe]/[steg]/nesteSteg/route';
import { useParams, useRouter } from 'next/navigation';
import { LøsAvklaringsbehovPåBehandling, StegType } from 'lib/types/types';
import { løsBehov } from 'lib/clientApi';

export const useLøsBehovOgGåTilNesteSteg = (
  steg: StegType
): {
  status: ServerSentEventStatus | undefined;
  isLoading: boolean;
  løsBehovOgGåTilNesteSteg: (behov: LøsAvklaringsbehovPåBehandling) => void;
} => {
  const params = useParams<{ aktivtSteg: string; id: string }>();
  const router = useRouter();
  const [status, setStatus] = useState<ServerSentEventStatus | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const løsBehovOgGåTilNesteSteg = async (behov: LøsAvklaringsbehovPåBehandling) => {
    await løsBehov(behov);
    listenSSE();
  };
  const listenSSE = () => {
    setIsLoading(true);
    const eventSource = new EventSource(`/api/post/${params.id}/hent/${params.aktivtSteg}/${steg}/nesteSteg/`, {
      withCredentials: true,
    });
    eventSource.onmessage = async (event: any) => {
      const eventData: ServerSentEventData = JSON.parse(event.data);
      if (eventData.status === 'DONE') {
        eventSource.close();
        if (eventData.skalBytteGruppe || eventData.skalBytteSteg) {
          // TODO: Legge tilbake igjen hash for aktivt-steg hvis vi tar i bruk dette?
          router.push(`/postmottak/${params.id}/${eventData.aktivGruppe}/`);
        }
        router.refresh();
        setIsLoading(false);
      }
      if (eventData.status === 'ERROR') {
        console.log('ERROR', eventData);
        setStatus(eventData.status);
        eventSource.close();
      }
      if (eventData.status === 'POLLING') {
        setStatus(eventData.status);
        console.log('POLLING', eventData);
      }
    };
    eventSource.onerror = (event: any) => {
      throw new Error('event onError', event);
    };
  };

  return { isLoading, status, løsBehovOgGåTilNesteSteg };
};
