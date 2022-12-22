import Input from "./components/Input";
import "./App.css";

function App() {
  // javascript를 작성하는 부분
  const mainStyleObj = {
    backgroundColor: "#b7e2f7",
    padding: "20px",
  };
  return (
    // html 같은 요소를 작성하는 부분 (JSX: js + html)
    <div>
      <header
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
        }}
      >
        정예부대 TodoApp
      </header>
      <main style={mainStyleObj}>
        {/* input 관련 */}
        <Input />
        {/* TodoList 관련 */}
      </main>
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
        }}
      >
        푸터입니다
      </footer>
    </div>
  );
}

export default App;
