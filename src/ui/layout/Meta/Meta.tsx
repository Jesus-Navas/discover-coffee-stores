import Head from "next/head";

export type TMetaProps = {
    title?: string;
    description?: string;
}

const Meta = ({ title, description }: TMetaProps) => (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>{title || "Coffe Connoiseur"}</title>
            <meta name="description" content={description || ""} />
            <meta property="og:title" content={title || "Coffe Connoiseur"} />
            <meta property="og:description" content={description || ""} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:site_name" content="Coffe Connoiseur" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || "Coffe Connoiseur"} />
            <meta name="twitter:description" content={description || ""} />

            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/favicon/apple-icon-57x57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/favicon/apple-icon-60x60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/favicon/apple-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/favicon/apple-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/favicon/apple-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/favicon/apple-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/favicon/apple-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/favicon/apple-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-icon-180x180.png"
            />
        </Head>
        <style jsx global>
            {`
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          overflow-x: hidden;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
        @font-face {
            font-family: "IBMPlexSans-Regular";
            src: url(/fonts/IBMPlexSans-Regular.ttf) format("truetype");
            font-display: block;
            }

        @font-face {
            font-family: "IBMPlexSans-SemiBold";
            src: url(/fonts/IBMPlexSans-SemiBold.ttf) format("truetype");
            font-display: block;
        }

        @font-face {
            font-family: "IBMPlexSans-Bold";
            src: url(/fonts/IBMPlexSans-Bold.ttf) format("truetype");
            font-display: block;
        }
      `}
        </style>
    </>
)

export default Meta