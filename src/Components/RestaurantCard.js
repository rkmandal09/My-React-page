import { CDN_URL } from "../../utils/constants";

const ResturentCard = ({ resData }) => {
  return (
    <div className="foodimage">
      <img className="res-img" src={CDN_URL + resData.cloudinaryImageId} />
      <h3>{resData.name}</h3>
      <p>{resData.cuisines}</p>
      <p>⭐ {resData.avgRating}</p>
      <p>{resData.costForTwo}</p>
      <p>{resData.slaString}</p>
      <p>{resData.areaName}</p>
    </div>
  );
};
export default ResturentCard;
