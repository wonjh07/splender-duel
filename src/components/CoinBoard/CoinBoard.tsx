import styled from 'styled-components';
import Coin from './Coin';
import { useEffect, useState } from 'react';
import { GiCardRandom, GiSwapBag } from 'react-icons/gi';

const CoinBoard = () => {
  const [coins, setCoins] = useState<number[]>([]);

  const removeCoin = (idx: number) => {
    const temp = [...coins];
    temp[idx] = -1;
    setCoins(temp);
  };

  const getCoins = () =>
    coins.map((e, idx) => (
      <Coin removeCoin={() => removeCoin(idx)} key={idx} color={e} />
    ));

  const shuffleCoins = () => {
    const temp = [5, 5, 6, 6, 6];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        temp.push(i);
      }
    }
    temp.sort(() => Math.random() - 0.5);
    setCoins(temp);
  };

  useEffect(() => {
    setCoins([]);
    shuffleCoins();
  }, []);

  return (
    <Container>
      <SuffleBtn>
        <GiCardRandom
          onClick={shuffleCoins}
          size={100}
          style={{ cursor: 'pointer' }}
        />
      </SuffleBtn>
      <Board>{getCoins()}</Board>
      <CoinBag>
        <GiSwapBag size={100} style={{ cursor: 'pointer' }} />
      </CoinBag>
    </Container>
  );
};

export default CoinBoard;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #b57d67;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

const SuffleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -200px;
  top: 0;
  width: 100px;
  height: 100%;
  transition: 0.2s;
  padding: 0 50px;
`;

const CoinBag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -200px;
  top: 0;
  width: 100px;
  height: 100%;
  transition: 0.2s;
  padding: 0 50px;
`;
