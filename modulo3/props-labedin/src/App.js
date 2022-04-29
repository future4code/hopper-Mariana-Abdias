import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemMariana from './Imagens/mari.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemMariana} 
          nome="Mariana Abdias" 
          descricao="Venho de uma carreira profissional há mais de 7 anos de experiência nas áreas de finanças das empresas, fui responsável por
          otimizar processos e torná-los
          autossuficientes pelas empresas a qual eu passei. Engenheira de Produção, apaixonada por lógica e sempre em busca de conhecimento. Meu propósito é impactar positivamente a vida das pessoas, por meio de processos eficazes e inteligentes."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container-small">
        <CardPequeno 
          imagem="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image" 
          nome="Email:" 
          descricao="mabdiasgoncalves@gmail.com"
        />
      </div>

      <div className="page-section-container-small">
        <CardPequeno 
          imagem="https://www.gov.br/anpd/pt-br/canais_atendimento/copy_of_17589.png" 
          nome="Endereço:" 
          descricao="Rua Aurélio Correale, 20 NS de Fátima - Itajubá MG"
        />
      </div>

      <div className="page-section-container-small">
        <CardPequeno 
          imagem="https://cdn.icon-icons.com/icons2/2070/PNG/512/cell_phone_icon_126579.png" 
          nome="Telefone:" 
          descricao="(35) 99856-0346"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://teccook.com.br/wp-content/uploads/2019/07/pratica.png" 
          nome="Senior Cost Analyst" 
          descricao="Sou responsável pelo
          departamento de controladoria de custos, realizo o controle dos custos indiretos e diretos de fabricação em relação ao orçamento. Acompanho o processo produtivo dos produtos
          através de conferência dos apontamentos de Ordens de Produção, apuro os custos dos produtos fabricados,
          integrando-os com a contabilidade."
        />
        
        <CardGrande 
          imagem="https://www.stabilus.com/fileadmin/user_upload/10-Umbrella/Brands-Logos/stabilus-logo-stabilus.png" 
          nome="Senior Financial Analyst" 
          descricao="Fui responsável por todo o
          departamento financeiro, desde contas a pagar e contas a receber, Controle do recebimento de clientes buscando receber todos os atrasos e identificando
          todos os débitos procedentes e improcedentes. Realização de conciliação das contas contábeis e aplicações financeiras buscando as melhores oportunidades de investimento." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://t.ctcdn.com.br/09Y6BbLFxNn7XGCYRGzEI0p0oy8=/400x400/smart/filters:format(webp)/i490027.jpeg" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://t.ctcdn.com.br/eXQweorgzzB_ARsw7I9Bvp4O_Qg=/400x400/smart/filters:format(webp)/i489927.jpeg" 
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
