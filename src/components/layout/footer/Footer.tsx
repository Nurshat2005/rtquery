import scss from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Footer</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
