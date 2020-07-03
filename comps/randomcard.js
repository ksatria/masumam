const RandomCard = (props) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-3by1">
                <img height="20" src="https://joeschmoe.io/api/v1/random" />
            </figure>
        </div>
        <div className="card-content">
            <p className="title">STATIC : {props.judul}</p>
            <p className="subtitle">{props.isi}</p>
        </div>
    </div>
)

export default RandomCard;