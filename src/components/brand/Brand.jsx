import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className="jpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="google" />
      </div>
    </div>
  );
};

export default Brand;
