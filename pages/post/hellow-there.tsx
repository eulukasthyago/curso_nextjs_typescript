import Navigation from '@components/Navigation';
import Head from 'next/head';
import Image from 'next/image';

export default function Hello () {
    return(
        <>
            <Head>
                <title>Hello there! - My Blog</title>
                <meta property="og:title" content="Hello there! - My Blog" />
            </Head>
            <Navigation />
            <article>
                <h1>Hello There!</h1>
                <Image
                    src='/post/post01.jpg'
                    width={640}
                    height={427}
                />
                <p>Foto de <a href='https://www.pexels.com/pt-br/@neo-853421?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels' target="_blank">Neo</a> no <a href='https://www.pexels.com/pt-br/foto/linhas-de-codigo-2653362/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels' target="_blank">Pexels</a></p>
            </article>
        </>
    );
}