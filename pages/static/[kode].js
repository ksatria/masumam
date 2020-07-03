import MainLayout from './../../layouts/main-layout';
import RandomCard from './../../comps/randomcard';
import data from '../../dataset/data.json';

const Page = (props) => (
    <MainLayout>
        <RandomCard judul={props.get.judul} isi={props.get.isi} />
    </MainLayout>
)

export async function getStaticPaths(){
    const paths = [
        {params : {kode : 'abc'}},
        {params : {kode : 'def'}},
        {params : {kode : 'xyz'}}
    ];

    return {paths, fallback : false}
}

export async function getStaticProps(context){
    const kode = context.params.kode;
    const get = data.find(f => f.kode === kode);

    return {
        props : {
            get
        }
    }
}

export default Page;