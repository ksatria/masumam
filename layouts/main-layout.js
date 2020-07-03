import Head from 'next/head';
import Navbar from '../comps/navbar';
import Footer from '../comps/footer';

const MainLayout = (props) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Mas Umam</title>
        </Head>
        <Navbar />
        <main className="section">
            <div className="container">
                {props.children}
            </div>
        </main>
        <Footer />
	</div>
)

export default MainLayout;