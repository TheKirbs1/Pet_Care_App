import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
    const {store, actions} = useContext(Context);
    const [authStatus, setAuthStatus] = useState("Pending");
    const navigate = useNavigate();

    useEffect(() => {
      const authenticate = async () => {
        let result = await actions.getDogs();
        if (result) {
            setAuthStatus("granted")
        } else { setAuthStatus("denied") }
      }
      authenticate()
    }, [actions])

    return (
      <>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </>
)};