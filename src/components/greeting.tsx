import User from './user';

function Greeting() {
  return (
    <header>
      <h1 className="greeting">
        Olá,
        {' '}
        <User />
      </h1>
    </header>
  );
}
export default Greeting;
