import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power Mike Hotel Abuja | Luxury Suites & Comfort",
  description:
    "Book your stay at Power Mike Hotel, Abuja’s top luxury hotel with premium suites, fine dining, and spa. Enjoy exceptional comfort in Nigeria’s capital.",
  keywords: [
    "luxury hotel Abuja",
    "Power Mike Hotel",
    "hotels in Abuja",
    "book hotel Nigeria",
    "premium suites Abuja",
    "Abuja accommodation",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Power Mike Hotel Abuja | Luxury Suites & Comfort",
    description:
      "We are established to provide excellent hospitality services to prospective clients families, individuals, coporate organization.",
    images: [
      {
        url: "https://powermikehotel.com.ng/images/p4.jpg",
        width: 1200,
        height: 630,
        alt: "Power Mike Hotel Abuja luxurious suite",
      },
    ],
    url: "https://powermikehotel.com.ng",
    type: "website",
    siteName: "Power Mike Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Mike Hotel Abuja | Luxury Suites & Comfort",
    description:
      "Discover luxury at Power Mike Hotel in Abuja. Book now for premium suites, fine dining, and spa services.",
    images: ["https://powermikehotel.com.ng/images/p4.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: "Power Mike Hotel",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Garki Street",
        addressLocality: "Abuja",
        addressRegion: "Federal Capital Territory",
        postalCode: "900001",
        addressCountry: "NG",
      },
      telephone: "+234-123-456-7890",
      email: "info@powermikehotelabuja.com",
      starRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
      },
      image: "https://powermikehotel.com.ng/images/p4.jpg",
      description:
        "Power Mike Hotel offers luxury accommodation in Abuja with premium suites, fine dining, spa services, and exceptional hospitality in Nigeria’s capital.",
      url: "https://powermikehotel.com.ng",
      checkinTime: "14:00",
      checkoutTime: "12:00",
      numberOfRooms: 50,
      priceRange: "$$$",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1364518211797547" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
