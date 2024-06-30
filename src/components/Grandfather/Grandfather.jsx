import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandfather.css';

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(100);

const Grandfather = () => {
    const asset = 'diamond';

    const [money, setMoney] = useState(100);
    return (
        <div className="grandfather">
            <h2>Grandfather</h2>
            <p>Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Father asset={asset}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandfather;