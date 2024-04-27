import "../components/Section.css";

const Section = () => {
  return (
    <div className="section">
      <h1>Hello there!</h1>
      <p className="subtitle">Please sign in or create account to continue</p>
      <div className="registr">
        <div className="sign">
          <h4>SIGN IN</h4>
          <p>Email</p>
          <input type="text" />
          <p>Password</p>
          <input type="text" />
          <label htmlFor="check">
            <input id="check" type="checkbox" />
            Remeber my details
          </label>
          <button className="button">SIGN IN</button>
          <p className="forget">Forgot password?</p>
        </div>
        <div className="create">
          <h4>CREATE ACCOUNT</h4>
          <p>First name</p>
          <input type="text" />
          <p>Last name</p>
          <input type="text" />
          <p>Email</p>
          <input type="text" />
          <p>Create Password</p>
          <input type="text" />
          <p>Confirm Password</p>
          <input type="text" />
          <div className="holder">
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">
              I want to receive Safari newsletters with the best deals and
              offers
            </label>
          </div>
          <button className="button">CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
