import { useState, useEffect } from 'react';
import styles from './Form.module.css';
const Form = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [mensagem, setMensagem] = useState('');
    const [submetido, setSubmetido] = useState(false);

    const pesoEstaSaudavel = (resultado) => {
        let mensagemTemp;
        if (resultado <= 17) {
            mensagemTemp = "Muito Abaixo do Peso";
        } else if (resultado > 17 && resultado <= 18.5) {
            mensagemTemp = "Abaixo do Peso";
        } else if (resultado > 18.5 && resultado <= 24.5) {
            mensagemTemp = "Peso Normal";
        } else if (resultado > 25 && resultado <= 30) {
            mensagemTemp = "Acima do Peso";
        } else if (resultado > 30 && resultado <= 34.5) {
            mensagemTemp = "Obesidade Nivel 1";
        } else if (resultado > 35 && resultado <= 40) {
            mensagemTemp = "Obesidade Nível 2 - Severa";
        } else {
            mensagemTemp = "Obesidade Nivel 3 - Mórbida"
        }
        setMensagem(mensagemTemp);
    }

    let mensage;
    const aPreencher = () => {

        if (peso && !altura) {
            mensage = "Preencha o campo altura";
        } else if (!peso && altura) {
            mensage = "Preencha o campo peso";
        } else if (isNaN(peso) || isNaN(altura)) {
            mensage = "Complete ambos os campos"
        } else if (!peso && !altura) {
            mensage = "Complete ambos os campos"
        } else {
            mensage = "Submeta ambos os campos"
        }
        return mensage;
    }
    useEffect(() => {
        let resultadoTemp = peso / (altura ** 2);
        setResultado(resultadoTemp);
        pesoEstaSaudavel(resultadoTemp);
    }, [peso, altura])
    return (
        <>
            <form className={styles.form}>
                <input onKeyUp={({ target }) => setPeso(Number.parseInt(target.value))} className={styles.peso} required type="number" placeholder="Peso" />
                <input onKeyUp={({ target }) => setAltura(Number.parseFloat(target.value))} className={styles.altura} required type="number" placeholder="Altura" />
                <button onClick={() => setSubmetido(true)} className={styles.submit} type="button">Submeter</button>
            </form>
            {submetido && !isNaN(resultado && peso && altura) ? (

                <>
                    <h3 className={styles.resultado}>{resultado.toFixed(1)}</h3>
                    <h3 className={styles.resultado}>{mensagem}</h3>
                </>

            ) : (
                <h3 className={styles.resultado}>{aPreencher()}</h3>
            )
            }
        </>
    )
}

export default Form; 