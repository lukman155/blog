'use client';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Lukman Abdulkarim. All rights reserved.</p>
      </div>
      <style jsx>{`
        .footer {
          background-color: #333;
          color: #fff;
          padding: 20px 0;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        p {
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
