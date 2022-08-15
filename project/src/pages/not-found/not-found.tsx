function NotFound(): JSX.Element {
  return (
    <div className="page" style={{display:'flex',flexDirection:'column',height:'100vh'}}>
      <main className="page__main page__main--not-found" style={{flexGrow:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="container">
          <section className="not-found" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <p style={{fontSize:'40px', lineHeight:'42px'}}>404 Not Found</p>
            <a href="/" style={{background:'#4481c3', color:'#fff', borderRadius:'15px', fontWeight:'600', padding:'5px 15px'}}>Home</a>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default NotFound;
