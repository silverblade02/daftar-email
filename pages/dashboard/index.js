import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <div className="flex gap-4">
            <Link href="/">Versi CSR</Link>
            <Link href="/dashboard">Dashboard</Link>
            </div>
            <div>
                <h1>Iyaaaaa</h1>
            </div>
        </div>
    );
}
