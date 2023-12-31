import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/src/main/styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";
import Providers from "@/src/main/providers/Providers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "rc-slider/assets/index.css";

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
