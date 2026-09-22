import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:{default:"DH SpaH — Aromas, cuidado & bem-estar",template:"%s | DH SpaH"},description:"Velas artesanais, aromatização, autocuidado, experiências SPA e Curso Vela Gruta.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
