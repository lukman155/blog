'use client';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Lukman Abdulkarim | <span><a href='/lukman.studiomonseur.com'>Website</a> • <a href='/github.com/lukman155'>Github</a></span></p>
      </div>
      <style jsx>{`
        .footer {
          background-color: #777;
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
          color: white;
        }

        a:hover {
          color: #000;
        }

        p {
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
