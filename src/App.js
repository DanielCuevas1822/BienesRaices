import { Route, Switch } from "react-router";
import Footer from "./components/Footer";

import Anuncios from "./views/Anuncios/Anuncios";
import SingleAnuncios from "./views/Anuncios/SingleAnuncios";
import Blog from "./views/Blog/Blog";
import SingleBlog from "./views/Blog/SingleBlog";
import Contacto from "./views/Contacto";
import Home from "./views/Home";
import Nosotros from "./views/Nosotros";

import { Provider } from "react-redux";
import { createStore } from "redux";
import default_reducer from "./redux/reducer";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  useEffect(() => {
    Promise.all([
      fetch(
        "https://bienesraices-4eea1-default-rtdb.firebaseio.com/propiedades.json"
      )
        .then((response) => response.json())
        .then((data) => {
          let propiedadesData = [];
          for (var clave in data) {
            let newid = { id: clave };
            if (data.hasOwnProperty(clave)) {
              let newinfo = data[clave];
              let concatInfo = { ...newid, ...newinfo };
              propiedadesData.push(concatInfo);
            }
          }
          return {
            propiedades: propiedadesData,
          };
        })
        .catch((err) => {
          console.log(err);
        }),
      fetch("https://bienesraices-4eea1-default-rtdb.firebaseio.com/blog.json")
        .then((response) => response.json())
        .then((data) => {
          let notasData = [];
          for (var clave in data) {
            let newid = { id: clave };
            if (data.hasOwnProperty(clave)) {
              let newinfo = data[clave];
              let blogInfo = { ...newid, ...newinfo };
              notasData.push(blogInfo);
            }
          }
          return {
            blog: notasData,
          };
        })
        .catch((err) => {
          console.log(err);
        }),
      fetch(
        "https://bienesraices-4eea1-default-rtdb.firebaseio.com/testimoniales.json"
      )
        .then((response) => response.json())
        .then((data) => {
          let testimonialesData = [];
          for (var clave in data) {
            let newid = { id: clave };
            if (data.hasOwnProperty(clave)) {
              let newinfo = data[clave];
              let testimonialesInfo = { ...newid, ...newinfo };
              testimonialesData.push(testimonialesInfo);
            }
          }
          return {
            testimoniales: testimonialesData,
          };
        })
        .catch((err) => {
          console.log(err);
        }),
    ]).then((results) => {
      let newresults = {};
      results.map((item) => {
        newresults = { ...newresults, ...item };
        return null;
      });
      setinitialState(newresults);
    });
  }, []);

  const [initialState, setinitialState] = useState(false);

  const store = createStore(default_reducer, initialState, composeEnhancers);

  return (
    <Provider store={store}>
      {initialState ? (
        <div className="App">
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
      ) : (
        <Loader/>
      )}
    </Provider>
  );
}

export default App;
