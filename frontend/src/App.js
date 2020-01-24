import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './main.css';



//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//Propriedade: Informaçãoes que um componente PAI passa para um componente FILHO.
//Estado: Informações mantidas pelo componente(Lembrar: Imutabilidade).

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const { latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
        
      },
      (err)=>{
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  },[]);
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="username_github" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required 
              value={latitude}
              onChange = { e => setLatitude(e.target.value)}
              />              
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required 
              value={longitude} 
              onChange = { e => setLongitude(e.target.value)}
              />              
            </div>            

          </div>  

          <button type="submit">Salvar</button>         
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest/top-crop/width/360/height/450?cb=20141021174750&path-prefix=pt-br" alt="Toph Bei Fong" />
              <div className="user-info">
                <strong>Toph Bei Fong</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Mauris nec dolor in eros commodo tempor.</p>
            <a href="google.com">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest/top-crop/width/360/height/450?cb=20141021174750&path-prefix=pt-br" alt="Toph Bei Fong" />
              <div className="user-info">
                <strong>Toph Bei Fong</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Mauris nec dolor in eros commodo tempor.</p>
            <a href="google.com">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest/top-crop/width/360/height/450?cb=20141021174750&path-prefix=pt-br" alt="Toph Bei Fong" />
              <div className="user-info">
                <strong>Toph Bei Fong</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Mauris nec dolor in eros commodo tempor.</p>
            <a href="google.com">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
