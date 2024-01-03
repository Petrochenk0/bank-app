import React from 'react';
import Growth from './Growth/Growth';
import FirstGraph from './../../public/FirstGraph.png';
import SecondGraph from './../../public/SecondGraph.png';
import ThirdGraph from './../../public/ThirdGraph.png';
import Image from 'next/image';
import styles from './styles.module.sass';
import { FilterContext } from '../Context/FilterContext';
interface ICryptoCurrency {
  title: string;
  price: number;
}

// async function getData(): Promise<ICryptoCurrency> {
//   const response = await fetch(
//     'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
//   );
//   const dataJson = await response.json();
//   console.log(dataJson);
//   return dataJson;
// }
function getImageUrl(cryptoArgumentInFunction: any) {
  if (cryptoArgumentInFunction === 'BTC') {
    return FirstGraph;
  } else if (cryptoArgumentInFunction === 'ETH') {
    return SecondGraph;
  } else {
    return ThirdGraph;
  }
}
function Main() {
  const { filterCrypto } = React.useContext(FilterContext);
  const [newValueInInput, setNewValueInInput] = React.useState('');
  const newFunctionChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValueInInput(event.target.value);
  };
  const filteredCryptos = ['BTC', 'ETH', 'ALG'].filter(filterCrypto);
  const filteredCryptosBySearch = filteredCryptos.filter((crypto) =>
    crypto.toLowerCase().includes(newValueInInput.toLowerCase()),
  );
  return (
    <div>
      <div className={styles.search__block}>
        <h2 className={styles.search__text}>Cryptocurrency search 🤑</h2>
        <input
          className={styles.search__crypto}
          type="text"
          value={newValueInInput}
          onChange={newFunctionChangeInput}
        />
      </div>
      <div className={styles.display__flex}>
        {filteredCryptosBySearch.map((cryptoArgument) => (
          <div
            key={cryptoArgument}
            className={styles.block__coins}
            style={{ display: filteredCryptos.includes(cryptoArgument) ? 'flex' : 'none' }}>
            <div className={styles.block__value}>
              <h2 className={styles.line__coin}>{cryptoArgument}</h2>
              <div className={styles.cost__coin}>$ 43, 231</div>
              <div className={styles.precent__coin}>1.9%</div>
            </div>
            <Image src={getImageUrl(cryptoArgument)} alt={cryptoArgument} />
          </div>
        ))}
      </div>
      <Growth />
    </div>
  );
}
export default Main;
