import React from 'react';
import Menu from './components/Menu/index';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na Área" }
      />
    </div>
  );
}

export default App;
