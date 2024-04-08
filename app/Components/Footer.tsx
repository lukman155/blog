'use client';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Lukman Abdulkarim | <span><a href='https://lukman.studiomonseur.com/'>Website</a> • <a href='https://github.com/lukman155'>Github</a></span></p>
      </div>
      <style jsx>{`
        .footer {
          border-top: 1px solid #333;
          background-color: white;
          color: #ddd;
          padding: 20px 0;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        a {
          color: #999;
        }

        a:hover {
          color: #000;
        }

        p {
          color: #333;
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
