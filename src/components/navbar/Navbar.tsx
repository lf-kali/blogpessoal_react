import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  
  const {handleLogout} = useContext(AuthContext);

  function sair() {
    handleLogout()
    navigate('/')
  }


  return (
    <>
      <header className="w-full flex justify-center py-4 bg-indigo-900 text-white" style={{top: 0, position:'sticky'}}>
        <nav className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2x1 font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to='/postagens' className='hover:underline'>Postagens</Link> 
            <Link to={'/temas'} className='hover:underline'>Temas</Link>
            <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link> 
            Perfil 
            <Link to='' onClick={sair} className='hover:underline'>Sair</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
