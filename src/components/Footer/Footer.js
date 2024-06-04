import GithubLogo from 'components/GithubLogo';

import './Footer.css';

function Footer() {
  return (
    <div className='footer' >
      <div className='github-link' >
        <GithubLogo />
        <a href='https://github.com/louisheal/delta-neutral-crypto-frontend' rel="noreferrer" target='_blank' >
          <h2>Frontend</h2>
        </a>
      </div>
      <div className='github-link margin-left-auto' >
        <GithubLogo />
        <a href='https://github.com/louisheal/delta-neutral-crypto-backend' rel="noreferrer" target='_blank' >
          <h2>Backend</h2>
        </a>
      </div>
    </div>
  );
}

export default Footer;