import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import { useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import style from './LoginRegister.module.css';

const LoginRegister = () => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleComponent = () => {
      setShowLogin(!showLogin);
    };

    return(
        <div className='container'>
            <div className='row'>
                <div className={`col-md-6 ${style.backgroundLogin}`}></div>
                <div className="col-md-6">
                    {showLogin
                    ? (<Login showRegister={!showLogin} toggleComponent={toggleComponent}/>) 
                    : (<Register showLogin={showLogin} toggleComponent={toggleComponent}/>)
                    }
                </div>
            </div>
        </div>
    )
};

export default LoginRegister;