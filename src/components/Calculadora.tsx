/*
useState: É usado para gerenciar informações mutáveis dos componentes
for(let i = 0; i < l1; i++)
*/

import { useState } from 'react';
import styles from './calculadora.module.css';

export function Calculadora() {
  const [txtValor1, setTxtValor1] = useState('');
  const [txtValor2, setTxtValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  const somar = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Prencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);
    const soma = valor1 + valor2;
    setResultado(parseFloat(soma.toFixed(2)));
  };

  const subtrair = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Prencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);
    const subtracao = valor1 - valor2;
    setResultado(parseFloat(subtracao.toFixed(2)));
  };

  const multiplicar = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Prencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);
    const multiplicacao = valor1 * valor2;
    setResultado(parseFloat(multiplicacao.toFixed(2)));
  };

  const divir = () => {
    if (!txtValor1 || !txtValor2) {
      alert('Prencha os valores antes de executar');
    }
    const valor1 = parseFloat(txtValor1);
    const valor2 = parseFloat(txtValor2);

    if (valor2 == 0 || valor1 == 0) {
      alert('Erro ao dividir por zero!');
    }

    const divisao = valor1 / valor2;

    setResultado(parseFloat(divisao.toFixed(2)));
  };

  return (
    <div>
      <label>Valor 1:</label> <br />
      <input
        className={styles.campos}
        type="text"
        name="valor1"
        onChange={(e) => setTxtValor1(e.target.value)}
      />
      <br />
      <label>Valor 2:</label> <br />
      <input
        className={styles.campos}
        type="text"
        name="valor2"
        onChange={(e) => setTxtValor2(e.target.value)}
      />
      <br />
      <label>Resultado</label> <br />
      <input
        type="text"
        name="resultado"
        readOnly
        value={resultado}
        className={styles.campos}
      />
      <br />
      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={divir}>Dividir</button>
    </div>
  );
}
