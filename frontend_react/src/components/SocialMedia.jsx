import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/raju_lorence?t=eQSaj-CWu62T1n02a6MThg&s=08"  target={'_blank'} rel="noreferrer noopener"><BsTwitter /></a>
    </div>
    <div>
      <a href="https://www.facebook.com/rajulorencemurmu" target={'_blank'} rel="noreferrer noopener"><FaFacebookF /></a>
    </div>
    <div>
      <a href="https://instagram.com/_life_lover_00?igshid=NmQ2ZmYxZjA=" target={'_blank'} rel="noreferrer noopener"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;