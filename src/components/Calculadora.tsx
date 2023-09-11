/*
useState: É usado para gerenciar informações mutáveis dos componentes
for(let i = 0; i < l1; i++)
*/

import { useState } from 'react';

export function Calculadora() {
  const [txtValor1, setTxtValor1] = useState('');
  const [txtValor2, setTxtValor2] = useState('');
  const [resultado, setResultado] = useState(0);
  return (
    <div>
      <label>Valor 1:</label> <br />
      <input type="text" name="valor1" />
      <br /> <br />
      <label>Valor 2:</label> <br />
      <input type="text" name="valor2" />
      <br />
      <label>Resultado</label> <br />
      <input type="text" name="resultado" readOnly />
      <br />
      <button>Calcular</button>
    </div>
  );
}
