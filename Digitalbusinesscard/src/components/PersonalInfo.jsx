const PersonalInfo = () => {
  return (
    <>
      <div className="personal">
        <div className="image">
          <img src="./src/assets/profile1.jpg" alt="Profile" />
        </div>
        <div className="info">
          <h1 className="name">Rezwan Ahmed</h1>
          <h3 className="title">Frontend Developer</h3>
          <p className="email">rezwan.ahmed@gmail.com</p>
        </div>
        <div className="buttons">
          <button className="email-button">
            <i className="fa-solid fa-envelope"></i> Email
          </button>
          <button className="linkedin-button">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
