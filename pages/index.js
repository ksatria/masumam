import MainLayout from './../layouts/main-layout';

const Home = () => (
	<MainLayout>
		<div className="container">
			<div className="row">
				<div className="col-sm"><h1 className="display-1">Mas Umam</h1></div>
				<div className="col-sm"><img src="/images/khoirul-umam.jpg" className="img-thumbnail" width="200px" /></div>
			</div>
			<div className="row">
				<div className="col-sm">Halo nama saya Umam</div>
				<div className="col-sm">Saya dosen di STIKOM PGRI Banyuwangi</div>
				<div className="col-sm">Bidang saya di Teknik Informatika</div>
			</div>
		</div>
	</MainLayout>
)

export default Home;