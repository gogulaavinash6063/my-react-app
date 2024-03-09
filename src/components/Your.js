import React from 'react';

const YourComponent = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Raleway, sans-serif',
  };

  const screenStyle = {
    background: 'linear-gradient(90deg, #5D54A4, #7C78B8)',
    position: 'relative',
    height: '600px',
    width: '360px',
    boxShadow: '0px 0px 24px #5C5696',
  };

  const backgroundShapeStyle = {
    transform: 'rotate(45deg)',
    position: 'absolute',
    // ... Other background shape styles
  };

  const loginStyle = {
    width: '320px',
    padding: '30px',
    paddingTop: '156px',
    // ... Other login form styles
  };

  const loginFieldStyle = {
    padding: '20px 0px',
    position: 'relative',
    // ... Other login field styles
  };

  const loginInputStyle = {
    border: 'none',
    borderBottom: '2px solid #D1D1D4',
    background: 'none',
    padding: '10px',
    paddingLeft: '24px',
    fontWeight: '700',
    width: '75%',
    transition: '.2s',
    // ... Other login input styles
  };

  const loginSubmitStyle = {
    background: '#fff',
    fontSize: '14px',
    marginTop: '30px',
    padding: '16px 20px',
    borderRadius: '26px',
    border: '1px solid #D4D3E8',
    textTransform: 'uppercase',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: '#4C489D',
    boxShadow: '0px 2px 2px #5C5696',
    cursor: 'pointer',
    transition: '.2s',
    // ... Other login submit button styles
  };

  const buttonIconStyle = {
    fontSize: '24px',
    marginLeft: 'auto',
    color: '#7875B5',
  };

  const socialLoginStyle = {
    position: 'absolute',
    height: '140px',
    width: '160px',
    textAlign: 'center',
    bottom: '0px',
    right: '0px',
    color: '#fff',
    // ... Other social login styles
  };

  const socialIconStyle = {
    padding: '20px 10px',
    color: '#fff',
    textDecoration: 'none',
    textShadow: '0px 0px 8px #7875B5',
    // ... Other social icon styles
  };

  return (
    <div style={containerStyle}>
      <div style={screenStyle}>
        <div className="screen__content">
          <form style={loginStyle} className="login">
            <div style={loginFieldStyle}>
              {/* Username/Email input field */}
              <input
                type="text"
                style={loginInputStyle}
                placeholder="User name / Email"
              />
            </div>
            <div style={loginFieldStyle}>
              {/* Password input field */}
              <input
                type="password"
                style={loginInputStyle}
                placeholder="Password"
              />
            </div>
            <button style={loginSubmitStyle} className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i style={buttonIconStyle} className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div style={socialLoginStyle} className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              {/* Social icons */}
              <a href="#" style={socialIconStyle} className="social-login__icon fab fa-instagram"></a>
              <a href="#" style={socialIconStyle} className="social-login__icon fab fa-facebook"></a>
              <a href="#" style={socialIconStyle} className="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span style={backgroundShapeStyle} className="screen__background__shape screen__background__shape4"></span>
          <span style={backgroundShapeStyle} className="screen__background__shape screen__background__shape3"></span>
          <span style={backgroundShapeStyle} className="screen__background__shape screen__background__shape2"></span>
          <span style={backgroundShapeStyle} className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
