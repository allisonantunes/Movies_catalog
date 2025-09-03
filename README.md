🔧 Ferramentas & Frameworks

React
* Uso de hooks (useState, useEffect) para estado e ciclo de vida.
* Componentização (cada parte da UI isolada em componentes).

React Router DOM
* Link, useNavigate, useParams, useSearchParams → navegação SPA (single-page application).
* Exemplo: useParams no Movie.jsx para pegar o id da URL.

Vite
* Indícios claros pelo uso de import.meta.env → leitura de variáveis de ambiente (ex: VITE_API, VITE_API_KEY).
* Vite é o bundler e dev server do projeto.

React Icons
* Ícones importados de bibliotecas (BiCameraMovie, BiSearchAlt2, BsGraphUp, FaStar etc.).

Consumo de API (provavelmente TMDB)
* Uso de fetch para buscar dados de filmes (top_rated, search, id).
* API Key e URLs configuradas via variáveis de ambiente.

📚 Conceitos e Padrões Aplicados

Composição de Componentes
* MovieCard é reutilizado em Home, Movie e Search.
Props e Reuso
* MovieCard recebe movie como prop e pode ocultar o link de detalhes via showLink.
Renderização Condicional
* Ex.: Mostrar "Carregando..." enquanto a API não retorna (movies.length > 0 && ...).
Controle de Estado com Hooks
* Estado de busca no Navbar (useState + navigate).
* Estado dos filmes (useState([]) em Home, Search e Movie).
Rotas Dinâmicas e Query Params
* useParams para capturar id e exibir detalhes.
* useSearchParams para pegar q (termo de busca) na URL.
Estilização Modular
* Cada componente importa seu CSS específico (Navbar.css, Movie.css, MoviesGrid.css).
* Organização estilo “CSS per component”.
