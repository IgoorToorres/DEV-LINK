import { LinksPage } from "@/templates/links-page";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'NextLinks Desafio RocketSeat',
  description: 'Site do desafio da rocketSeat feito por Igor Torres do curso de Next-js',
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
        width: 600,
        height: 600,
        alt: 'NextLinks'
      }
    ]
  }
}


export default function Home() {
  return (<LinksPage />)
}
