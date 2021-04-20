import { Route, Switch } from "react-router";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Anuncios from "./views/Anuncios/Anuncios";
import SingleAnuncios from "./views/Anuncios/SingleAnuncios";
import Blog from "./views/Blog/Blog";
import SingleBlog from "./views/Blog/SingleBlog";
import Contacto from "./views/Contacto";
import Home from "./views/Home";
import Nosotros from "./views/Nosotros";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/anuncios" component={Anuncios} />
        <Route exact path="/anuncios/:name" component={SingleAnuncios} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:name" component={SingleBlog} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
