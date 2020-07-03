import MainLayout from './../../layouts/main-layout';
import data from '../../dataset/data.json';

const Page = (props) => (
    <MainLayout>
        <div className="card">
            <div className="card-content">
                <p className="title">SERVER : {props.get.judul}</p>
                <p className="subtitle">{props.get.isi}</p>
            </div>
        </div>
    </MainLayout>
)

export async function getServerSideProps(context){
    const kode = context.params.kode;
    const get = data.find(f => f.kode === kode);

    return {
        props : {
            get
        }
    }
}

export default Page;