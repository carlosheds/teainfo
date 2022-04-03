import React from 'react';

import FeaturedBlogPost from './FeaturedBlogPost';
import AboutGroup from './AboutGroup';


export default function BlogContent() {
    return (
        <main className="container mt-5">
            <div className="row justify-content-between">
                <section className="col-md-8 p-0">
                    
                    <FeaturedBlogPost
                        imgSrc="https://static.wixstatic.com/media/fa1440_6646befa12ee46799fc613ff909c745a~mv2.png/v1/fill/w_846,h_508,al_c,q_90/fa1440_6646befa12ee46799fc613ff909c745a~mv2.webp"
                        postTitle=" #Dadication"
                        postText="Há muito que oiço dizer que os pais quando sabem que o seu filho é autista abandonam a família, diz Rui (nome fictício), pai do Joaquim (nome fictício) e do Rafael (nome fictício). Este último diagnosticado com Perturbação do Espectro do Autismo aos cinco anos. Assim como o Rui que foi diagnosticado recentemente a quando da avaliação do seu filho."
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismonoadulto.com/post/dadication"
                        blogName="Austimo No Adulto"
                    />

                    <FeaturedBlogPost
                        imgSrc="https://static.wixstatic.com/media/fa1440_5fa1518a2eb74b85b2c0494c34d1ac0c~mv2.jpeg/v1/fill/w_940,h_411,fp_0.50_0.50,q_90,enc_auto/fa1440_5fa1518a2eb74b85b2c0494c34d1ac0c~mv2.webp                        "
                        postTitle="Cultura autista"
                        postText="Procuro um artista autista, conheces algum? pergunta Madalena (nome ficticio). Conheço algumas pessoas autistas que fazem coisas fantásticas! responde Rui (nome fictício). Sim, eu também. Mas conheces algum artista autista?"
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismonoadulto.com/post/cultura-autista"
                        blogName="Austimo No Adulto"
                    />

                    <FeaturedBlogPost
                        imgSrc="https://www.autismoemdia.com.br/wp-content/uploads/2021/12/AUTISTA-NAO-VERBAL.png"
                        postTitle="A curiosa história de um autista não-verbal e sua boneca Lili"
                        postText="O fluminense Vinícius, de 8 anos, é um autista não-verbal e, por si só, sua história já seria a cara do nosso blog. No entanto, em uma conversa super descontraída com a funcionária pública Débora Barcellos, descobrimos uma história surpreendente."
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismoemdia.com.br/blog/autista-nao-verbal/"
                        blogName="Autismo em dia"
                    />

                    <FeaturedBlogPost
                        imgSrc="https://www.autismoemdia.com.br/wp-content/uploads/2021/12/google-contrata-pessoas-com-autismo.png"
                        postTitle=" Google está contratando mais pessoas no espectro do autismo – mas o que isso representa?"
                        postText="A presença de autistas no mercado de trabalho sempre foi, sem dúvida, um desafio para contratantes e profissionais. De um lado, uma parcela ainda pequena de autistas com formação técnica ou universitária. "
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismoemdia.com.br/blog/google-autismo/"
                        blogName="Autismo em dia"
                    />
                    <FeaturedBlogPost
                        imgSrc="https://www.autismoemdia.com.br/wp-content/uploads/2021/11/autismo-em-palavras.png"
                        postTitle="Autismo em palavras: 15 termos para entender o transtorno"
                        postText="O que você sabe sobre comorbidades? E, por exemplo, sobre propriocepção? Parece coisa de outro mundo, não é mesmo?  O transtorno do espectro do autismo é algo tão amplo e complexo que, muitas vezes, você pode ficar perdido em meio a tantos termos."
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismoemdia.com.br/blog/autismo-em-palavras/"
                        blogName="Autismo em dia"
                    />
                     <FeaturedBlogPost
                        imgSrc="https://www.autismoemdia.com.br/wp-content/uploads/2021/11/HIPERFOCO-no-autismo.png"
                        postTitle="Hiperfoco: o que isso significa no autismo?"
                        postText="Muitas pessoas, tenham elas algum transtorno mental ou não, experimentam algum tipo de relação de grande interesse por algum assunto. Algumas pessoas, por exemplo, sabem tudo de carros, enquanto outras já assistiram todos os filmes antigos possíveis. "
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismoemdia.com.br/blog/hiperfoco/"
                        blogName="Autismo em dia"
                    />
                    <FeaturedBlogPost
                        imgSrc="https://www.autismoemdia.com.br/wp-content/uploads/2021/12/Design-sem-nome-10.png"
                        postTitle="Autismo e sensibilidade sensorial: o que pode ajudar"
                        postText="A sensibilidade sensorial de alguém com autismo pode ser bem diferente se comparada com o processamento sensorial de um neurotípico. Não é incomum que muitas vezes o primeiro sinal de autismo se apresenta com a dificuldade de um bebê em estar em locais movimentados e diferentes: muito barulho, luzes  ou cheiros fortes ou estímulos táteis que causam desconforto podem arruinar completamente o dia deles.
                        "
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismoemdia.com.br/blog/autismo-e-sensibilidade-sensorial-o-que-pode-ajudar/"
                        blogName="Autismo em dia"
                    />
                    <FeaturedBlogPost
                        imgSrc="https://www.autismoemdia.com.br/wp-content/uploads/2021/07/transtorno-do-espectro-autista.jpg"
                        postTitle="Transtorno do espectro autista: o que é o TEA"
                        postText="Se você deseja saber o que é o Transtorno do Espectro Autista (TEA), está no lugar certo. No decorrer deste artigo, falaremos com detalhes sobre o que é o autismo, como ele se manifesta, seus sintomas, graus e como ele afeta de diferentes formas as pessoas que fazem parte do espectro."
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismoemdia.com.br/blog/transtorno-do-espectro-autista/"
                        blogName="Autismo em dia "
                    />
                    <FeaturedBlogPost
                        imgSrc="https://www.autismoemdia.com.br/wp-content/uploads/2021/07/autismo-leve-em-adultos.png"
                        postTitle="Autismo leve em adultos: o problema da invisibilidade"
                        postText="O autismo na sociedade, do leve ao severo, ainda é um assunto muito novo. E, quase sempre, o foco são as crianças. Porém, hoje vamos falar da questão do autismo leve em adultos através do ponto de vista da Vânia Felix."
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismoemdia.com.br/blog/autismo-leve-em-adultos/"
                        blogName="Autismo em dia"
                    />
                    <FeaturedBlogPost
                        imgSrc="https://www.autismoemdia.com.br/wp-content/uploads/2022/02/diagnostico-autismo.png"
                        postTitle="Diagnóstico de autismo em mãe e filho: conheça essa história"
                        postText="Atualmente, é cada vez mais comum que pais e mães se descubram autistas depois de receberem o diagnóstico de autismo dos próprios filhos. Por que isso acontece?"
                        postBtnText="Continue lendo..."
                        postUrl="https://www.autismoemdia.com.br/blog/diagnostico-autismo/"
                        blogName="Autismo em dia"
                    />


                </section>



                <aside className="col-md-4 mt-5">
                    <div className="sticky-top">
                        <h3 className="text-center">Membros Squad 40</h3>
                        <AboutGroup nameTitle="Carlos" imgSrc="carlos.jpg" personText="" />
                        <AboutGroup nameTitle="Rafael" imgSrc="./rafael.jpg" personText="" />
                        <AboutGroup nameTitle="André" imgSrc="andre.jpg" personText="" />
                    </div>
                </aside>
            </div>
        </main>
    )
}