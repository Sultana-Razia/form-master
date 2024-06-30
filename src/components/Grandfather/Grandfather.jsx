import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandfather.css';


const Grandfather = () => {
    const asset = 'diamond';
    return (
        <div className="grandfather">
            <h2>Grandfather</h2>
            <section className="flex">
                <Father asset={asset}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandfather;