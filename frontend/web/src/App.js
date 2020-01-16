import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao intefere no restante da app.
// Propriedade: Informacoes que um componente PAI passa para o componente FILHO
// Estado: Informacoes mantidas pelo componente (Lembra: imutabilidade)

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handAddDev(e) {
    e.preventDefault();

    //Fazer backend 1:20:00
  }

  return (
    <div id="app">
      <aside>
      <strong>Cadastrar</strong>
        <form onSubmit={handAddDev} >
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name='techs' 
              id='techs' 
              required 
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name='latitude' 
                id='latitude' 
                required 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name='longitude' 
                id='longitude'                 
                required 
                value={longitude} 
                onChange={e => setLongitude(e.target.value)}
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
              <img src="https://avatars1.githubusercontent.com/u/16677074?s=460&v=4" alt="Guilherme Vada"/>
              <div className="user-info">
                <strong>
                  Guilherme Vada
                </strong>
                <span>
                  ReactJS, React Native, Node.js
                </span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento Web e Mobile.</p>
            <a href="https://github.com/VadaGuilherme">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/16677074?s=460&v=4" alt="Guilherme Vada"/>
              <div className="user-info">
                <strong>
                  Guilherme Vada
                </strong>
                <span>
                  ReactJS, React Native, Node.js
                </span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento Web e Mobile.</p>
            <a href="https://github.com/VadaGuilherme">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/16677074?s=460&v=4" alt="Guilherme Vada"/>
              <div className="user-info">
                <strong>
                  Guilherme Vada
                </strong>
                <span>
                  ReactJS, React Native, Node.js
                </span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento Web e Mobile.</p>
            <a href="https://github.com/VadaGuilherme">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/16677074?s=460&v=4" alt="Guilherme Vada"/>
              <div className="user-info">
                <strong>
                  Guilherme Vada
                </strong>
                <span>
                  ReactJS, React Native, Node.js
                </span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento Web e Mobile.</p>
            <a href="https://github.com/VadaGuilherme">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
