function Card({ src, title, description }) {
  return (
    <div className="card">
      <img className="card-image" src={src} alt="Profile picture"></img>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}
export default Card;