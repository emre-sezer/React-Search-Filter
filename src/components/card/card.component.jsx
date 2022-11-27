
import "./card.styles.css";

const Card = ({monster: {id,name,email}}) => {
 
 

  return (
     
    <div className='card-container'>
      <h2>{name}</h2>
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
      
    
    {/* <p>{email}</p> */}
  </div>
   
  );

  };

export default Card;
