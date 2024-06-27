function Greeting(props){
    return (
      <div className="product">
        <h1>{props.greeting}</h1>
      </div>
    );
}

const Renderizado = () => {
    return (
      <section className="products">
        <div className="product-grid">
          <Greeting
            greeting="Bienvenido"
          />
        </div>
      </section>
    );
}
  
export default Renderizado;
