import './App.css';
import Chat from './Chat';
import Counter from './counter';



function App() {
return (
        <div className="container">
            <div>
              <Chat/>
            </div>
            <div>
              <Counter/>
            </div>
        </div>
    );
}

export default App;
