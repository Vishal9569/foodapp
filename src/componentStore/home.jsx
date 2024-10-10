import Navbar from "./navBar";
import Categorybtn from "./CategeoryMenu";

import FoodCardMap from "./FoodCardMap";
import AddCart from "./AddtoCart";
import { useState } from "react";

function Home() {

    const [searchTerm, setSearchTerm] = useState('');

    return <>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Categorybtn />
        <FoodCardMap searchTerm={searchTerm} />
        <AddCart />

    </>
}

export default Home;