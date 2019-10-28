import React from "react";
import useGet from "./useGet";
import usePost from "./usePost";
import useDelete from "./useDelete";

const url = "https://mymoney-fabiano.firebaseio.com/movimentacoes/2019-10.json";

function App() {
  const data = useGet(url);
  const [postData, post] = usePost(url);
  const [deleteData, remove] = useDelete();

  const saveNew = () => {
    post({ valor: 10, descricao: "olá" });
  };

  const doRemove = () => {
    remove(
      "https://mymoney-fabiano.firebaseio.com/movimentacoes/2019-10/-LsI6zdiZhhhGhDqGD4Q.json"
    );
  };

  return (
    <div className="App">
      <h1>MyMoney</h1>
      {JSON.stringify(data)}
      {data.loading && <p>loading...</p>}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove}>Delete</button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  );
}

export default App;
