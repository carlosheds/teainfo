import React from 'react';

import HeroSection from '../components/HeroSection';
import ContatoForm from '../components/ContatoForm'
import Section from '../components/Section'
import Intersection from '../components/Intersection'

export default function Home() {
    return (
        <main className="container">
            <HeroSection cardTitle="Titulo 1" />

            <Section
                img="https://leandroreimberg.com.br/wp-content/uploads/2019/12/arte-autismo-2.jpg"
                text="O autismo — ou Transtorno do Espectro do Autismo (TEA), como é tecnicamente chamado — é uma condição de saúde caracterizada por prejuízos em três importantes áreas do desenvolvimento humano: habilidades socioemocionais, atenção compartilhada e linguagem. Atualmente a ciência fala não só de um tipo de autismo, mas de muitos tipos 
            diferentes, que se manifestam de uma maneira única em cada pessoa."

                font="https://tismoo.us/saude/o-que-e-autismo-ou-transtorno-do-espectro-do-autismo-tea/"
            />

            <Intersection title="TIPOS DE AUTISMOS" />

            <Section
                title="Síndrome de Asperger"
                text="É considerada a forma mais leve entre os tipos de autismo e é três vezes mais comum em meninos do que em meninas. Normalmente, quem possui a síndrome conta com uma inteligência bastante superior à média e pode ser chamado também de “autismo de alto funcionamento”.
            Também é normal que esse autista se torne extremamente obsessivo por um objeto ou um único assunto – e passe horas discutindo ou falando sobre o assunto.
            Se a Síndrome não for diagnosticada na infância, o adulto com Asperger poderá ter mais chances de desenvolver quadros depressivos e de ansiedade.
            "
            />
            <Section
                title="Transtorno Invasivo do Desenvolvimento"
                text="Essa é uma “fase intermediária”, já que ela é um pouco mais grave que a Síndrome de Asperger, mas não tão forte quanto o Transtorno Autista.
            Nesse caso, os sintomas são muito variáveis. Porém, de uma maneira geral o paciente apresentará:"
            />
            <ul className="container col col-6">
                <li>quantidade menor de comportamentos repetitivos</li>
                <li>dificuldades com a interação social</li>
                <li>competência linguística inferior à Síndrome de
                    Asperger mas superior ao Transtorno Autista.
                </li>
            </ul>
            <Section
                title="Transtorno Autista"
                text="São aqueles que apresentam sintomas mais graves que os dois outros tipos de autismo. Neste caso, várias capacidades são afetadas de forma mais intensa, como os relacionamentos sociais, a cognição e a linguística. Outro fator bem comum é a presença intensificada dos comportamentos repetitivos.Esse é o tipo “clássico” de autismo e que costuma ser diagnosticado de forma precoce, em geral antes dos 3 anos. Os principais sinais que indicam a condição são:"
            />
            <ul className="container col col-6">
                <li>falta de contato com os olhos</li>
                <li>comportamentos repetitivos como bater ou balançar as mãos</li>
                <li>dificuldades em fazer pedidos usando a linguagem</li>
                <li>desenvolvimento tardio da linguagem</li>
            </ul>
            <Section
                title="Transtorno Desintegrativo da Infância"
                text="É considerado o tipo mais grave do espectro autista e o menos comum. Em geral, a criança apresenta um período normal de desenvolvimento, porém a partir dos 2 aos 4 anos de idade, ela passa a perder as habilidades intelectuais, linguísticas e sociais sem conseguir recuperá-las."
            />

            <Intersection title="Quais os principais níveis do autismo?" text="Além dos diferentes tipos de autismo, também existem variações em relação aos níveis de gravidade. Eles são:" />

            <Section title="Nível 1 (Leve)" text="As crianças apresentam dificuldades para iniciar a relação social com outras pessoas e podem ter pouco interesse em interagir com os demais, apresentando respostas atípicas ou insucesso a aberturas sociais. Em geral, apresentam dificuldades para trocar de atividades e problemas de planejamento e organização." />

            <Section title="Nível 2 (Médio)" text="As crianças podem apresentar um nível um pouco mais grave de deficiência nas relações sociais e na comunicação verbal e não verbal. Têm limitações em iniciar interações sociais e prejuízos sociais aparentes mesmo com a presença de apoio.
Além disso, são mais inflexíveis nos seus comportamentos, apresentam dificuldades com a mudança ou com os comportamentos repetitivos e sofrem para modificar o foco das suas ações.
" />
            <Section title="Nível 3 (Grave)" text="Nesse nível, existem déficits bem mais graves em relação a comunicação verbal e não verbal, além de dificuldades notórias para iniciar uma interação social, com graves prejuízos de funcionamento.
Também apresentam dificuldade extrema em lidar com a mudança e com comportamentos repetitivos – o que interfere de forma mais acentuada no seu funcionamento. Ainda contam com grande sofrimento para mudar o foco das suas ações." font="https://blog.psicologiaviva.com.br/tipos-de-autismo/"/>


            <ContatoForm />
        </main>
    )
}