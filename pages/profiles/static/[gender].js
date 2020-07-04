import MainLayout from '../../../layouts/main-layout';
import ProfileCard from '../../../comps/profilecard';
import fetch from 'node-fetch';

const Person = ({results}) => (
    <MainLayout>
        <div className="columns">
            {results.map((data,index) => {
                let name = `${data.name.first} ${data.name.last}`;
                let photo = data.picture.large;
                let dob = data.dob.date;
                let email = data.email;
                let address = `${data.location.street.name} Street No. ${data.location.street.number}, ${data.location.city}, ${data.location.state}, ${data.location.country}. Postal code: ${data.location.postcode}`;

                return (
                    <div className="column" key={index}>
                        <ProfileCard photo={photo} name={name} dob={dob} address={address} email={email} />
                    </div>
                );
            })}
        </div>
    </MainLayout>
)

export async function getStaticPaths(){
    const paths = [
        {params : {gender : 'male'}},
        {params : {gender : 'female'}}
    ];

    return {paths, fallback : false}
}

export async function getStaticProps(context){
    let gender = context.params.gender;
    let source = `https://randomuser.me/api/?gender=${gender}&results=3`;
    let response = await fetch(source);
    let data = await response.json();
    let results = data.results;

    return {
        props : {
            results
        }
    }
}

export default Person;