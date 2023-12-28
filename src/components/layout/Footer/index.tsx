import Logo from "@components/components/layout/Header/Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import LinksInstitucional from "./LinksInstitucional";

export default function Footer() {
    return (
        <footer className='flex w-screen px-10 py-5 border-t border-t-[#5CCFF1]'>
            <div className="flex flex-col gap-2 w-1/3">
                <Logo />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.sit praesentium totam, non pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro</p>
            </div>
            <div className="w-2/12">
                <LinksInstitucional />
            </div>
            <div className="w-2/12">
                <LinksInstitucional />
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold h-10">Acompanhe nossas redes sociais</h3>
                <div className="flex gap-4 w-full justify-around">
                    <a href="#">
                        <FacebookIcon size={38}/>
                    </a>
                    <a href="#">
                        <InstagramIcon size={38}/>
                    </a>
                    <a href="#">
                        <LinkedinIcon size={38}/>
                    </a>
                    <a href="#">
                        <TwitterIcon size={38}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
