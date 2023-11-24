import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Enes" symbol="X" />
          <Player name="Dogan" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
