import './styles.scss';
import topper from './topper.jpg';

const Header = props => {
  return (
    <div className='header'>
      <img src={topper} alt='Top image of person spraying themselves with a hose connected to PEDs cannister' />
      <h1>
        Green eggs and ham and performance-enhancing drugs
      </h1>
      <h2>
        By <a href='https://www.instagram.com/bjjmentalmodels/'>Steve</a> & <a href='https://www.instagram.com/onguardbjj/'>Matt Kwan</a>, feat. <a href='https://www.instagram.com/p/CIJ43lopG0o/'>Lachlan Giles</a> <br />
        Illustrated by <a href='https://www.instagram.com/berimbozo/'>Beatrice Jin</a>.
      </h2>
    </div>
  );
};

export default Header;
