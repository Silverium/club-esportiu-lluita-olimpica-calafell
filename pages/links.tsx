import BlogContainer from "components/BlogContainer";
import BlogMeta from 'components/BlogMeta';
import ExternalLinkButton from "components/ExternalLinkButton";
import Head from 'next/head';

export default function LinksPage() {
    return (
        <BlogContainer>
            <Head>
                <title>Enllaços | LLuita Olímpica Calafell</title>
                <BlogMeta />
            </Head>
            <h1 className="font-bold text-lg">Enllaços</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-4 my-6" >
                <ExternalLinkButton url="https://www.zenytsports.org/Web/WrestlingCatalunya/index.php">Federació Catalana de Lluita</ExternalLinkButton>
                <ExternalLinkButton url="https://www.zenytsports.org/zenytadmin/calendario/index.php">Calendari (de la FCLL)</ExternalLinkButton>
                <ExternalLinkButton url="https://www.facebook.com/victordominguezlucha">Facebook de Víctor Domínguez</ExternalLinkButton>
            </div>
        </BlogContainer>
    )
}