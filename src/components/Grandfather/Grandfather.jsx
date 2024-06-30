import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandfather.css';


const Grandfather = () => {
    return (
        <div className="grandfather">
            <h2>Grandfather</h2>
            <section className="flex">
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandfather;