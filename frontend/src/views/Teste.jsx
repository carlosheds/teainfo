import React, { useState, setState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Teste() {
    const navigate = useNavigate();
    const [resposta, setResposta] = useState('Resultado');
    const getTestResult = (e) => {
        const inputsChecked = document.querySelectorAll('input:checked');
        e.preventDefault();
        let sempre = 0
        inputsChecked.forEach(i => i.value == 0 ? sempre++ : '')
        if (inputsChecked.length < 14) {
            window.alert('Por favor, selecione uma resposta em todos os campos')
        }else {
            sempre >= 7 ? setResposta("Nós da TEAInfo recomendamos que você procure um profissional especializado") : setResposta("Não precisa se preocupar. Porém fique a vontade caso queira a opinião de um especialista");
        }

    }
    return (
        <main className="container mt-5 mb-5">
            <form action="" id="formTest">

                <div className="form-control">
                    <label htmlFor="">
                        Prefiro fazer as coisas sempre da mesma maneira
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question1" value="0" className="" />Sempre
                        <input type="radio" name="question1" value="1" />Nunca
                        <input type="radio" name="question1" value="2" />Talvez
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="">
                        Com frequência fico tão absorvido(a) com uma coisa que esqueço todo o resto.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question2" value="0" className="" />Sempre
                        <input type="radio" name="question2" value="1" />Nunca
                        <input type="radio" name="question2" value="2" />Talvez
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="">
                        Frequentemente noto pequenos ruídos que outras pessoas não ouvem.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question3" value="0" className="" />Sempre
                        <input type="radio" name="question3" value="1" />Nunca
                        <input type="radio" name="question3" value="2" />Talvez
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="">
                        Costumo prestar atenção aos números das placas dos automóveis ou a outras sequências de informação do mesmo tipo.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question4" value="0" className="" />Sempre
                        <input type="radio" name="question4" value="1" />Nunca
                        <input type="radio" name="question4" value="2" />Talvez
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="">
                        As outras pessoas com frequência me dizem que falei algo indelicado, apesar de eu achar que fui delicado(a).
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question5" value="0" className="" />Sempre
                        <input type="radio" name="question5" value="1" />Nunca
                        <input type="radio" name="question5" value="2" />Talvez
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="">
                        Quando leio uma história, consigo imaginar facilmente a aparência dos personagens.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question6" value="0" className="" />Sempre
                        <input type="radio" name="question6" value="1" />Nunca
                        <input type="radio" name="question6" value="2" />Talvez
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="">
                        Sou fascinado(a) por datas
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question7" value="0" className="" />Sempre
                        <input type="radio" name="question7" value="1" />Nunca
                        <input type="radio" name="question7" value="2" />Talvez
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="">
                        Tenho facilidade em compreender situações sociais.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question8" value="0" className="" />Sempre
                        <input type="radio" name="question8" value="1" />Nunca
                        <input type="radio" name="question8" value="2" />Talvez
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="">
                        Tenho tendência a notar detalhes que os outros não reparam.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question9" value="0" className="" />Sempre
                        <input type="radio" name="question9" value="1" />Nunca
                        <input type="radio" name="question9" value="2" />Talvez
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="">
                        Tenho facilidade em inventar histórias.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question10" value="0" className="" />Sempre
                        <input type="radio" name="question10" value="1" />Nunca
                        <input type="radio" name="question10" value="2" />Talvez
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="">
                        Gosto de bater papo.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question11" value="0" className="" />Sempre
                        <input type="radio" name="question11" value="1" />Nunca
                        <input type="radio" name="question11" value="2" />Talvez
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="">
                        Sou fascinado(a) por números
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question12" value="0" className="" />Sempre
                        <input type="radio" name="question12" value="1" />Nunca
                        <input type="radio" name="question12" value="2" />Talvez
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="">
                        Quando leio uma história, sinto dificuldade em entender as intenções dos personagens.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question13" value="0" className="" />Sempre
                        <input type="radio" name="question13" value="1" />Nunca
                        <input type="radio" name="question13" value="2" />Talvez
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="">
                        Tenho dificuldade em fazer novos amigos.
                    </label>
                    <div className="d-flex align-items-center justify-content-center">

                        <input type="radio" name="question14" value="0" className="" />Sempre
                        <input type="radio" name="question14" value="1" />Nunca
                        <input type="radio" name="question14" value="2" />Talvez
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary mt-5 btn-lg" onClick={getTestResult}>Mostrar Resultado</button>
                    </div>
                    <div className="resultado col-md mt-5 text-center">
                        <h3 className="display-6">{resposta}</h3>
                    </div>
                </div>
            </form>
        </main>
    )
}