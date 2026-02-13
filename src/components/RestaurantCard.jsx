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
    sla,
  } = resData.info;
  

  return (
    <div className="bg-amber-100 w-70 m-2 p-4 rounded-lg hover:bg-amber-50 hover:border">
      <img
        className=" rounded"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="res-card-content">
        <h3 className="font-bold p-2">{name}</h3>
        <h4 className="px-2">{cuisines.join(', ')}</h4>
        <div className="pt-2 px-2 flex justify-between">
          <span>⭐{avgRating}</span>
          <span>{costForTwo}</span>
          <span>{sla?.slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
