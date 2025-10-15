import Image from 'next/image';

export default function Hero() {
    return (
        <main className="min-h-screen">
            <div className='w-full h-full mx-auto grid md:grid-cols-2 py-20 md:py-40'>
                <div className='space-y-1 my-auto mx-auto p-4'>
                    <h1 className="text-4xl md:text-7xl font-bold font-serif leading-tight">
                        Play Chess with
                        <br />
                        <span className="font-italianno text-6xl md:text-9xl text-primary">
                        Friends
                        </span>
                    </h1>
                    <p className="text-lg font-sans text-muted-foreground">
                        Challenge your friends to a match, communicate in real-time.
                    </p>
                </div>
                <Image
                    src="/images/chess.jpg"
                    alt="Chess Board"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover "
                />
            </div>
        </main>
    )
}