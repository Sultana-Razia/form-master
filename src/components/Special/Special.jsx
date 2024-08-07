import { useContext } from "react";
import { AssetContext } from "../Grandfather/Grandfather";


const Special = ({ asset }) => {

    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>{asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Special;