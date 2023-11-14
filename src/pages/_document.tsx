import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" defer></script>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet"></link>
      <Head><title>Alquiler de Vajillas | Elian</title></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
