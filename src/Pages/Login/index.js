
import "./styles.css";





  const Login = (props) => {


  return (
    <>
      <div id="content">
        <form className="form-signin"  >
          <img
            className="mb-4"
            src="https://cdn6.campograndenews.com.br/uploads/noticias/2021/08/20/3bsg011ghcaos.jpg"
            alt="Logo"
            width="130"
            height="130"
          />
          <h1 className="h3 mb-3 font-weight-normal">Faça seu Login</h1>
          <p>3 Bateria de Artilharia Antiaérea</p>

          <input 
            type="text"
            id="user"
            name="user"
            // onChange={onChange}
            // value={values.user}
            className="form-control mb-1"
            placeholder="Identidade"
            required
            autoFocus
          />

          <input
            type="password"
            id="password"
            name="password"
            // onChange={onChange}
            // value={values.password}
            className="form-control"
            placeholder="Senha"
            required
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Entrar
          </button>
          
          <p className="mt-5 mb-3 text-muted">
            Seção de Tecnologia da Informação - RITEX: 892-2031
          </p>
          <a href="http:/home "> help</a>
        </form>
      </div>
    </>
  );
};

export default Login;
