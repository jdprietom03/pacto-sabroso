import styles from "./styles.module.css";
import Paloma from "./../images/paloma.png";
import Logo from "./../images/logo.png";
import React from 'react';
const weightLetters = ['U','W','Z', 'N', 'T'];
const skinnyLetters = ['I','O'];

const Letter = ({ letter, id }) => {
    const upperLetter = letter.toUpperCase();

    return (
        <div className={`${styles.letter} ${ weightLetters.find(el => el === upperLetter) ? 'more' : ''}`} style={{
            zIndex: `${id}`
        }}>
            <span>{letter}</span> 
        </div>
    );
};


const Text = ({ word }) => {

    const size = word.length;

    return <div className={styles.pacto}>
        <div className={styles.hastag}>
            <span>#Pactosabroso</span>
        </div>
        <div className={styles.name}>
            <div className={styles.paloma}>
                <img src={Paloma} alt="Paloma" />    
            </div> 
            {word.split('').map((letter, index) => <Letter key={index} letter={letter} id={size - index} />)}
        </div>
        <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
        </div>
    </div>
}

export default Text;