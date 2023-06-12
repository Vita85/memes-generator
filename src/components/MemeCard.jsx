const MemeCard = ({img, topText, bottomText}) => {
  return (
    <div className="image">
      <img src={img} alt="" />
      <p className="top-text">{topText}</p>
      <p className="bottom-text">{bottomText}</p>
    </div>
  );
};
export default MemeCard;

