import './TokenLogos.css';

const TokenLogos = ({ tokenOneSymbol, tokenTwoSymbol, className }) => {
  const tokenOneLogo = `${tokenOneSymbol}.png`
  const tokenTwoLogo = `${tokenTwoSymbol}.png`

  return (
    <div className={className} >
      <img src={tokenTwoLogo} className='logo' alt='' />
      <img src={tokenOneLogo} className='logo' alt='' />
    </div>
  );
}

export default TokenLogos;