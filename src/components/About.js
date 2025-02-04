function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside className="aside">
        <img src={image} placeholder={image} alt="blog logo" />
        <p>{about}</p>
    </aside>
  );
}

export default About;