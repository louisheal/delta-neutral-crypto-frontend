import githubLogo from 'assets/github.png';

import './GithubLogo.css';

const GithubLogo = () => {
  return (
    <img src={githubLogo} className='github-logo' alt='Github Logo' />
  );
}

export default GithubLogo;