import '../styles/Footer.css'


function Footer(){
    return (
      <footer className="footer">
        <p>
          This app was built during the <strong>TypeScript course</strong> at Cibernarium. 
          <br />
          Designed and developed by Lorena Criado. © {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
  
  export default Footer;