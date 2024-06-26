function Greeting(props){
    return (
      <div className="product">
        <h1>{props.saludo}</h1>
      </div>
    );
}

const Renderizado = () => {
    return (
      <section className="products">
        <div className="product-grid">
          <Greeting
            saludo="Bienvenido"
          />
        </div>
      </section>
    );
}
  
export default Renderizado;
