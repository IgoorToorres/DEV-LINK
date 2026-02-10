import { LinksPage } from "@/templates/links-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'NextLinks',
  description: 'Site do desafio da rocketSeat feito por Igor Torres',
  robots: 'index, follow',
  openGraph: {
    title: 'NextLinks',
    description: 'Site do desafio da rocketSeat feito por Igor Torres',
    url: 'https://dev-link-two-sandy.vercel.app/',
    siteName: 'Site.Set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://dev-link-two-sandy.vercel.app/thumbnail.png',
        width: 800,
        height: 600,
        alt: 'NextLinks'
      }
    ]
  }
}


export default function Home() {
  return (<LinksPage />)
}
