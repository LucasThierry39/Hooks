import { useState, useEffect } from 'react';
export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Código aqui
    document.title = `Contador ; ${count}`;
  }, [count]); // Array de dependências || Se deixa vazio, ele vai alterar sempre que a pagina for recarregada

  return (
    <div>
      <h1>Exemplo de useEffect</h1>
      <button onClick={() => setCount(count + 1)}>Contar</button>
    </div>
  );
}
