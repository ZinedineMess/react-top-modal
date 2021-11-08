import React from 'react';
import 'lib/components/Spinner/Spinner.css';

const Spinner = (props) => {
    return (
        <div className={`modalOverlay ${props.customClassName ? 'modalOverlay-' + props.customClassName : ''}`}> 
            <div 
                className={`modalWrapper ${props.customClassName ? 'modalWrapper-' + props.customClassName : ''}`}
                aria-modal 
                aria-hidden 
                tabIndex={-1} 
                role='dialog'
            > 
                <section className={`modal ${props.customClassName ? 'modal-' + props.customClassName : ''}`}>
                    <article className={`modalSection ${props.customClassName ? 'modalBody-' + props.customClassName : ''}`}>
                        <div className={`spinner ${props.customClassName ? 'loader-' + props.customClassName : ''}`}></div>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Spinner;
