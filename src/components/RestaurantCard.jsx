import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <div className="res-card-details">
          <span>⭐{avgRating}</span>
          <span>₹{costForTwo / 100} FOR TWO</span>
          <span>{deliveryTime} minutes</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
