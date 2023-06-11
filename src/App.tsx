import styled from 'styled-components';
import CoinBoard from './components/CoinBoard/CoinBoard';

function App() {
  return (
    <Component onDragOver={(e) => e.preventDefault()}>
      <FlexCCC>
        <PlayerOneArea></PlayerOneArea>
        <BoardArea>
          <CoinBoard />
        </BoardArea>
        <PlayerTwoArea></PlayerTwoArea>
      </FlexCCC>
    </Component>
  );
}

export default App;

const Component = styled.div`
  width: 100%;
  height: 100vh;
  background-color: beige;
  user-select: none;
`;

const FlexCCC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const BoardArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60%;
  aspect-ratio: 1;
  box-sizing: border-box;
`;

const PlayerOneArea = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  background-color: #1a781f;
`;

const PlayerTwoArea = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  background-color: #712cd3;
`;
