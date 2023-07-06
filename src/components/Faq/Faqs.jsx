import Faq from 'react-faq-component';
import '../../fonts.css';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

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
        const[t] = useTranslation("global");
        const data = {
            rows: [
            {
                title: `${t('Faqs.question1')}`,
                content: `${t('Faqs.answer1')}`
            },
            {
                title: `${t('Faqs.question2')}`,
                content: `${t('Faqs.answer2')}`
            },
            {
                title: `${t('Faqs.question3')}`,
                content: `${t('Faqs.answer3')}`
            },
            {
                title: `${t('Faqs.question4')}`,
                content: `${t('Faqs.answer4')}`
            }]
        }
    return (
        <>
            <DivFaq className="d-flex flex-column align-items-center p-3">
                <h2>{t("Faqs.quest")}<span>{t("Faqs.spanQuest")}</span> </h2>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </DivFaq>
            <DivFaqDest className='d-flex flex-column align-items-center'>
                <h2>{t("Faqs.quest")}<span>{t("Faqs.spanQuest")}</span> </h2>
                <div className='question-item d-flex'>
                    <p className='answer'>{t("Faqs.answer1")}</p>
                    <h3 className='question firstH3'>{t("Faqs.question1")}</h3>
                </div>
                <div className='question-item d-flex'>
                    <p className='answer'>{t("Faqs.answer2")}</p>
                    <h3 className='question'>{t("Faqs.question2")}</h3>
                </div>
                <div className='question-item d-flex'>
                    <p className='answer'>{t("Faqs.answer3")}</p>
                    <h3 className='question'>{t("Faqs.question3")}</h3>
                </div>
                <div className='question-item d-flex'>
                    <p className='answer'>{t("Faqs.answer4")}</p>
                    <h3 className='question'>{t("Faqs.question4")}</h3>
                </div>
                <div className='d-flex'>
                    <p className='buttonFaq'>{t("Faqs.moreQuest")}</p>
                </div>
            </DivFaqDest>
        </>
    );
};

export default Faqs;

const DivFaqDest = styled.div`
    background-color: ${({theme}) => theme.bgc};
    padding: 2rem;
    height: 110vh;
    background-image: url("../../../public/img/blob.svg");
    background-position: -80px 20px;
    background-repeat: no-repeat;
    color: ${({theme}) => theme.text};
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
        background-color: ${({theme}) => theme.primary};
        padding: 20px 20px;
        color: ${({theme}) => theme.text};
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 400;
        line-height: 1;
        cursor: pointer;
    }
    .buttonFaq:hover{
        background-color: ${({theme}) => theme.bgc};
        border: 1px solid ${({theme}) => theme.terceary};;
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
            border-top: 1px solid ${({theme}) => theme.terceary};
        }
        h3{
            width: 70%;
            padding: 1rem;
            text-align: start;
            border-bottom: 1px solid ${({theme}) => theme.terceary};
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
    background-color: ${({theme}) => theme.primary};
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