'use client'
import { useSearchParams } from "next/navigation";
import WaveTrack from '@/components/track/wave.track';
import Container from '@mui/material/Container';

const DetailTrackPage = ({ params }: { params: { slug: string } }) => {

    const searchParams = useSearchParams();

    const search = searchParams.get("audio");
    return (
        <Container>
            <div>
                <WaveTrack />
            </div>
        </Container>
    );
}

export default DetailTrackPage;