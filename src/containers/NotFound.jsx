import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <section className="error">
            <div className="error__container">
                <div className="box">
                    <div className="text animated pulse">404</div>
                </div>
                <h2 className="titulo">Página no encontrada</h2>
            </div>
        </section>
);

export default NotFound;