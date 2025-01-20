import { useEffect, useState } from "react"

const useSse = (url:string) => {

    const [events, setEvents] = useState<any[]>([]);
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        const eventSource = new EventSource(url);

        eventSource.onmessage = (event) => {
            console.log(event);
            const data = JSON.parse(event.data);
            setEvents((prev) => [...prev, data]);
        }

        eventSource.onerror = (err) => {
            console.error('Error in SSE: ', err);
            setError('Failed to connect to SSE');
            eventSource.close();
        }

        return () => {
            eventSource.close();
        }
    }, [url])

    return {events, error}
}

export default useSse;