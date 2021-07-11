import React,{Fragment} from 'react';

const Card = ({ card }) => {
    return (
        <Fragment>
            {card.show.image ?
               <div className="col-md-3">  
                <div className="card" style={{ width: '18rem', height: 'auto' }}>
                    <img src={card.show.image.medium} className="card-img-top" alt="..." />
       
                    <div className="card-body">
                        <h5 className="card-title">{card.show.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Type : </b>{card.show.type}</li>
                        <li className="list-group-item"> <b>Score : </b>{card.score}</li>
                    
                        {card.show.network ? <li className="list-group-item"><b> Country : </b>{card.show.network.country.name} {card.show.network.country.timezone} </li> : <> </>}
                        <li className="list-group-item"> <b>Date : </b>{card.show.premiered}</li>
                        <a href={card.show.url} className="btn btn-primary"><b >more information</b></a>
                    </ul>

              


                </div>
      
                </div>
                : ''}
             
        </Fragment>
    );
};

export default Card;
