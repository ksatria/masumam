import {getAge, getDOB} from '../libs/age';

const ProfileCard = (props) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-square">
                <img src={props.photo} alt={props.name} />
            </figure>
        </div>
        
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src={props.photo} alt={props.name} />
                    </figure>
                </div>
                
                <div className="media-content">
                    <p className="title is-4">{props.name}</p>
                    <p className="subtitle is-6">{props.email}</p>
                </div>
            </div>
            
            <div className="content">
                {props.address}
                <br />
                DOB : <time dateTime={props.dob}>{getDOB(props.dob)}</time> | {getAge(props.dob)} y.o
            </div>
        </div>
    </div>
)

export default ProfileCard;