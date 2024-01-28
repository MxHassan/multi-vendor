import { Link } from 'react-router-dom';

const Public = () => {
  return (
    <section>
      <header>
        <h1>
          Welcome to <span>xMo E-Commerce</span>
        </h1>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita voluptates ex nisi recusandae quaerat quos sit, cumque
          in dolores corporis quibusdam reiciendis autem ipsum dolor, eius sequi consectetur soluta!
        </p>
        <address>
          xMo E-Commerce
          <br />
          777 Foo Drive
          <br />
          Foo City, EG 12345
          <br />
          <a href="tel:+201001950121">(+20) 0100-195-0121</a>
        </address>
        <br />
        <p>Owner: Mohamed Hassan</p>
      </main>
      <footer>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
      </footer>
    </section>
  );
};

export default Public;
