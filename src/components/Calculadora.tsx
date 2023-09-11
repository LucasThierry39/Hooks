/*
useState: É usado para gerenciar informações mutáveis dos componentes
for(let i = 0; i < l1; i++)
*/

import { useState } from 'react';

export function Calculadora() {
  const [txtValor1, setTxtValor1] = useState('');
  const [txtValor2, setTxtValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Prencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);
    const total = valor1 + valor2;
    setResultado(parseFloat(total.toFixed(2)));
  };
  return (
    <div>
      <label>Valor 1:</label> <br />
      <input
        type="text"
        name="valor1"
        onChange={(e) => setTxtValor1(e.target.value)}
      />
      <br /> <br />
      <label>Valor 2:</label> <br />
      <input
        type="text"
        name="valor2"
        onChange={(e) => setTxtValor2(e.target.value)}
      />
      <br />
      <label>Resultado</label> <br />
      <input type="text"
       name="resultado" 
       readOnly value={resultado}/>
      <br />
      <button onClick={calcular}>Calcular</button>
    </div>
  );
}
