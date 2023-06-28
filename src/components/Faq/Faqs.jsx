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
    bgColor: '${props => props.theme.colors.primary}',
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
                    <h3 className='question firstH3'>¿Cómo creo mi cuenta en COINPAY?</h3>
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
                <div className='d-flex'>
                    <p className='buttonFaq'>Ver más preguntas</p>
                </div>
            </DivFaqDest>
        </>
    );
};

export default Faqs;

const DivFaqDest = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    padding: 2rem;
    height: 110vh;
    background-image: url("../../../public/img/blob.svg");
    background-position: -80px 20px;
    background-repeat: no-repeat;
    color: ${props => props.theme.colors.tertiary};
    h2{
        display: flex;
        font-family: 'Tusker Grotesk';
        text-align: start;
        line-height: 1;
        text-transform: uppercase;
        font-size: 4rem;
        margin-bottom: 7rem;
        font-weight: 900;
        margin-right: 6rem;
        margin-left: 0;
    }
    h2 span {
        margin-left: 0.5rem;
    }
    .buttonFaq{
        border-radius: 29px;
        border: 1px solid black;
        background-color: ${props => props.theme.colors.primary};
        padding: 20px 20px;
        color: black;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 400;
        line-height: 1;
        cursor: pointer;
    }
    .buttonFaq:hover{
        background-color: #FFD6E8;
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
        text-align: start;
        line-height: 1;
        .firstH3{
            border-top: 1px solid ${props => props.theme.colors.tertiary};
        }
        h3{
            width: 70%;
            padding: 1rem;
            text-align: start;
            border-bottom: 1px solid ${props => props.theme.colors.tertiary};
        }
        p{
            width: 30%;
        }
    }
    @media(max-width: 767px){
        display: none!important;
    }
    @media(min-width: 1300px){
        height: 120vh;
        h2{
            font-size: 5rem;
            margin-bottom: 5rem;
        }
        h2 span {
            margin-left: 0.7rem;
        }
        .buttonFaq{
            margin-top: 1.5rem;
            position: relative;
            top: 0;
        }
        .question-item{
            h3{
                font-size: 2.1rem;
                padding: 1.5rem;
            }
        }
    }
    @media(min-width: 1600px){
        h2{
            font-size: 8rem;
            margin-bottom: 4rem;
        }
        .question-item{
            h3{
                font-size: 2.63rem;
                padding: 1.5rem;
            }
        }
    }
    @media(min-width: 1700px){
        padding-top: 8rem;
        h2{
            margin-bottom: 3rem;
        }
        .question-item{
            h3{
                font-size: 3rem;
                padding: 1.5rem;
            }
            p{
                font-size: 1.2rem;
            }
        }
    }
`

const DivFaq = styled.div`
    background-color: ${props => props.theme.colors.primary};
    height: 130vh;
    overflow: hidden;
    margin-bottom: 2rem;
    h2{
        display: flex;
        flex-direction: column;
        font-family: 'Tusker Grotesk';
        text-align: start;
        line-height: 1;
        text-transform: uppercase;
        font-size: 7rem;
        margin-bottom: 3rem;
        font-weight: 900;
        margin-right: 6rem;
        margin-left: 0;
    }
    .row-title-text{
        padding-right: 7rem!important;
    }
    .styles_faq-row__2YF3c{
        border-bottom: 1px solid black!important;
    }
    @media(min-width: 768px){
        display: none!important;
    }
`