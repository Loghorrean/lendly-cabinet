import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/src/main/styles/index.scss";
import Providers from "@/src/main/providers/Providers";

export const metadata: Metadata = {
    title: "Lendly Cabinet",
    description: "Lendly Cabinet",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
