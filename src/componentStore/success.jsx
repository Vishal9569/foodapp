import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return <div className="spinner" >
        {loading ? (<PropagateLoader />)
            : (<div>
                <h2> Oder Successful !</h2>
                <p>Your Order Are Placed</p>
            </div>
            )}
    </div>
}

export default Success;