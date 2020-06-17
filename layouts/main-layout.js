import Head from 'next/head';

const MainLayout = (props) => (
    <div>
        <Head>
            <title>Mas Umam</title>
            <link href="/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        {props.children}
	</div>
)

export default MainLayout;