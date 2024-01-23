"use client"
import Script from "next/script"

export const GoogleAnalytics = ({GA_TRAKING_ID}:{GA_TRAKING_ID: string}) => {
  return (
    <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRAKING_ID}`}
      strategy="afterInteractive"
    />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "${GA_TRAKING_ID}");
        `}
      </Script>
    </>
  )
}