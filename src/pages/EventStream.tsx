import useSse from "../hook/useSse";

const EventStream = () => {

    const {events, error} = useSse('http://localhost:3001/v1/api/post/events')

    console.log(events);
    return(
        <p>asd</p>
    )
}

export default EventStream;