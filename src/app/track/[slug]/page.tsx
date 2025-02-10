'use client'
import { useSearchParams } from "next/navigation";


const DetailTrackPage = ({ params }: { params: { slug: string } }) => {

    const searchParams = useSearchParams();

    const search = searchParams.get("audio");
    return (
        <div>
            <h1>Detail Track Page</h1>
        </div>
    );
}

export default DetailTrackPage;