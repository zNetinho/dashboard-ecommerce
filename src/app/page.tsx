"use client";
import Benefits from "@components/components/Benefits";
import HeroSection from "@components/components/HeroBanner";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    return (
        <div className="h-auto flex flex-col justify-center items-center">
            <section>
                <HeroSection />
            </section>
            <section className="flex w-full py-3.5 justify-around items-center">
                <Benefits />
            </section>
            <section>                    
                {/* Not defined */}
            </section>
        </div>
    );
}
