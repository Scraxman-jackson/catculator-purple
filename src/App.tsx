import { useState } from 'react';

// 1. COMPONENTE DE LA CALCULADORA
function Catculator() {
  const [pantalla, setPantalla] = useState('0');

  // Función para agregar números
  const agregar = (valor: string) => {
    if (pantalla === '0' || pantalla === 'Error') {
      setPantalla(valor);
    } else {
      setPantalla(pantalla + valor);
    }
  };

  // Función para limpiar pantalla
  const borrar = () => setPantalla('0');

  //  calcular resultado
  const calcular = () => {
    try {
      let operacion = pantalla.replace(/÷/g, '/').replace(/×/g, '*');
      setPantalla(eval(operacion).toString());
    } catch {
      setPantalla('Error');
    }
  };

  return (
    <div style={{ background: '#cb89ec', padding: '20px', borderRadius: '20px', width: '260px', margin: '20px auto', border: '4px solid #1a1a1a' }}>
      <h2 style={{ color: '#ecebeb', textAlign: 'center', margin: '0 0 10px 0' }}>CATCULATOR </h2>
      
      {/* Pantalla verde */}
      <div style={{ background: '#eff2ec', padding: '10px', fontSize: '28px', textAlign: 'right', marginBottom: '15px', border: '3px solid #1a1a1a', borderRadius: '8px', fontWeight: 'bold' }}>
        {pantalla}
      </div>

      {/* Botones */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={borrar}>AC</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('÷')}>÷</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('×')}>×</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('-')}>-</button>

        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('7')}>7</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('8')}>8</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('9')}>9</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('+')}>+</button>

        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('4')}>4</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('5')}>5</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('6')}>6</button>
        <button style={{ padding: '10px', fontWeight: 'bold', background: '#c26cedc8' }} onClick={calcular}>=</button>

        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('1')}>1</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('2')}>2</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('3')}>3</button>
        <button style={{ padding: '10px', fontWeight: 'bold' }} onClick={() => agregar('0')}>0</button>
      </div>
    </div>
  );
}

// 2. TU COMPONENTE PRINCIPAL
export default function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>¡🤍Hola soy shanel💜!</h1>
      <p>Mi primer componente en React</p>

      {/*  la Calculadora */}
      <Catculator />
    </div>
  );
}