import React from 'react';

export default function ContatoFrom() {
    return (
        <div className="container my-5">
            <h1 className="text-center">Contato</h1>
            <form action="" >
                <div className="row row-cols-md-1 justify-content-center">
                    <div className="mb-3 col-md-7">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" name="nome" id="nome" className="form-control" placeholder="Digite seu nome completo" />

                    </div>
                    <div className="mb-3 col-md-7">

                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Digite seu email" />
                    </div>
                    <div className="mb-3 col-md-7">
                        <label htmlFor="mensagem" className="form-label">Mensagem</label>
                        <textarea type="textarea" name="mensagem" id="mensagem" className="form-control" placeholder="Deixe-nos uma mensagem" />
                    </div>
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}