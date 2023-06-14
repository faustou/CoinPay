import Faq from 'react-faq-component';
import '../../fonts.css';
import styled from 'styled-components';

const data = {
    rows: [
      {
        title: "¿Cómo creo mi cuenta en COINPAY?",
        content: "Descargá la app Lemon Cash, registrate con tus datos y empezá a operar en crypto."
      },
      {
        title: "¿Cómo cargo dinero en mi cuenta de Lemon?",
        content: "Podés depositar pesos a tu CVU de Lemon desde cualquier cuenta bancaria o no bancaria y se acreditan al instante. ¡También podés depositar criptomonedas!"
      },
      {
        title: "¿Cómo retiro dinero desde mi cuenta de Lemon?",
        content: "¡Podés retirar tus pesos a una cuenta bancaria o virtual cuando quieras de forma inmediata!"
      },
      {
        title: "¿Cómo pido mi Lemon Card?",
        content: "Podés pedir tu Lemon Card sin costo desde la sección 'Tarjeta' dentro de la app, indicando la dirección donde quieras recibirla"
      }]
  }
  const styles = {
    bgColor: '#00c3ff',
    titleTextColor: "black",
    rowTitleColor: "black",
    arrowColor: "black",
    rowContentPaddingLeft: '50px',
    rowContentPaddingRight: '100px',
    rowTitlePaddingLeft: '50px',
};

const config = {
        animate: true,
        arrowIcon: "+",
        expandIcon: "+",
        collapseIcon: "x",
        tabFocus: true
};

const Faqs = () => {
    return (
        <>
            <DivFaq className="d-flex flex-column align-items-center p-3">
                <h2>PREGUNTAS <span> FRECUENTES </span> </h2>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </DivFaq>
            <DivFaqDest className='d-flex flex-column align-items-center'>
                <h2>PREGUNTAS <span> FRECUENTES </span> </h2>
                <div className='question-item d-flex'>
                    <p className='answer'>Descargá la app Lemon Cash, registrate con tus datos y empezá a operar en crypto.</p>
                    <h3 className='question'>¿Cómo creo mi cuenta en COINPAY?</h3>
                </div>
                <div className='question-item d-flex'>
                    <p className='answer'>Podés depositar pesos a tu CVU de Lemon desde cualquier cuenta bancaria o no bancaria y se acreditan al instante. ¡También podés depositar criptomonedas!</p>
                    <h3 className='question'>¿Cómo cargo dinero en mi cuenta de Lemon?</h3>
                </div>
                <div className='question-item d-flex'>
                    <p className='answer'>¡Podés retirar tus pesos a una cuenta bancaria o virtual cuando quieras de forma inmediata!</p>
                    <h3 className='question'>¿Cómo retiro dinero desde mi cuenta de Lemon?</h3>
                </div>
                <div className='question-item d-flex'>
                    <p className='answer'>Podés pedir tu Lemon Card sin costo desde la sección 'Tarjeta' dentro de la app, indicando la dirección donde quieras recibirla.</p>
                    <h3 className='question'>¿Cómo pido mi Lemon Card?</h3>
                </div>
            </DivFaqDest>
        </>
    );
};

export default Faqs;

const DivFaqDest = styled.div`
    background-color: #00c3ff;
    padding: 2rem;
    h2{
        display: flex;
        font-family: 'Tusker Grotesk';
        text-align: start;
        line-height: 1;
        text-transform: uppercase;
        font-size: 4rem;
        margin-bottom: 1rem;
        font-weight: 900;
        margin-right: 6rem;
        margin-left: 0;
    }
    .question{
        text-align: center;
    }
    .answer{
        opacity: 0;
        transition: opacity 0.3s;
        text-align: center;
    }
    .question-item:hover .answer {
        opacity: 1;
    }
    .question-item {
        align-items: center;
        width: 100%;
        padding: 1rem;
        text-align: start;
        line-height: 1;
        h3{
            width: 70%;
            text-align: center;
            border-bottom: 1px solid black;
        }
        p{
            width: 30%;
        }
    }
`

const DivFaq = styled.div`
    background-color: #00c3ff;
    h2{
        display: flex;
        flex-direction: column;
        font-family: 'Tusker Grotesk';
        text-align: start;
        line-height: 1;
        text-transform: uppercase;
        font-size: 7rem;
        margin-bottom: 1rem;
        font-weight: 900;
        margin-right: 6rem;
        margin-left: 0;
    }
    @media(min-width: 768px){
        display: none!important;
    }
`