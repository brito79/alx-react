import React from 'react';
import './Footer.css';
<<<<<<< HEAD
import { getFooterCopy, getFullYear } from '../utils/utils';
=======
import { getFullYear, getFooterCopy } from '../utils';
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b

function Footer() {
  return (
    <div className="App-footer">
<<<<<<< HEAD
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  )
=======
    <p>Copyright { getFullYear() } - { getFooterCopy() } </p>
    </div>
  );
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
}

export default Footer;
