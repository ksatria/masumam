import MainLayout from './../layouts/main-layout';
import { getAge } from '../libs/age';

const About = () => (
    <MainLayout>
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="/images/khoirul-umam.jpg" alt="Umam" />
                    </figure>
                </div>
                
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Khoirul Umam</strong> <small>@ksatrialangit</small> <small>{getAge("1990-07-11")}y.o</small>
                            <br />
                            Dosen program studi S1 Teknik Informatika di <a href="http://stikombanyuwangi.ac.id">STIKOM PGRI Banyuwangi</a>. Alumni S1 Pendidikan Teknik Informatika <a href="http://www.um.ac.id">Universitas Negeri Malang</a> (2013) dan S2 Teknik Informatika <a href="http://www.its.ac.id">ITS Surabaya</a> (2015). Pernah menjadi anggota <a href="https://teatermelati.com">Teater Melati</a> saat duduk di bangku <a href="http://www.sman1glagah.sch.id">SMAN 1 Glagah Banyuwangi</a> (2006-2009) dan masih aktif mengawal perkembangannya hingga saat ini.
                        </p>
                    </div>
                    
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" aria-label="Instagram" href="http://www.instagram.com/ksatrialangit">
                                <span className="icon is-small">
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </span>
                            </a>
                            
                            <a className="level-item" aria-label="Twitter" href="http://www.twitter.com/TheKsatria">
                                <span className="icon is-small">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </span>
                            </a>
                            
                            <a className="level-item" aria-label="Facebook" href="http://www.facebook.com/umam.ksatria">
                                <span className="icon is-small">
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    </MainLayout>
)

export default About;