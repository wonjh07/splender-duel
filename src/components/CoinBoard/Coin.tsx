import styled from 'styled-components';

const CoinColor = [
  '#FBFBFB',
  '#FD4553',
  '#312E2E',
  '#00AD60',
  '#026CA5',
  '#D99FBE',
  '#FFD84A',
];

interface CoinProps {
  color: number;
  removeCoin: () => void;
}
const Coin: React.FC<CoinProps> = ({ color, removeCoin }) => {
  const dragStartHandler = (e: any) => {
    e.dataTransfer.effectAllowed = 'move';
    e.target.id = 'dragging';
  };

  const dragEndHandler = (e: any) => {
    e.target.id = '';
  };

  return (
    <Container>
      {color !== -1 && (
        <CoinBox
          draggable
          onClick={() => removeCoin()}
          onDragStart={(e) => dragStartHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => e.preventDefault()}
          color={CoinColor[color]}>
          <InnerCoin>HI</InnerCoin>
        </CoinBox>
      )}
      {color === -1 && <Empty />}
    </Container>
  );
};

export default Coin;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 10px;
  background-color: #f0d7bb;

  #dragging {
    opacity: 0.2;
    box-shadow: 0 0 0 0 gray;
  }
`;

const CoinBox = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  padding: 10%;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid;
  background-color: ${(props) => props.color};
  box-shadow: 0 2px 4px 0px gray;
  cursor: pointer;
`;

const Empty = styled.div`
  width: 100%;
  height: 100%;
  margin: 1px;
  box-sizing: border-box;
  padding: 1rem;
  cursor: pointer;
`;

const InnerCoin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  box-sizing: border-box;
  background-color: #d7d7d7;
  pointer-events: none;
`;
