import { useContext, useEffect, useState } from "react";
import "./ReDirectPage.css";
import { SiteContext } from "../../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";

export const ReDirectPage = () => {
  const [loading, setLoading] = useState(true);

  const from = useParams();
  let x = from === "login";
  console.log(from.from, x);
  // const { logState, setCurrentPage } = useContext(SiteContext);
  // const navigate = useNavigate();
  // console.log(logState);
  // useEffect(() => {
  //   if (logState) {
  //     setCurrentPage("account");
  //     navigate("/account");
  //   }
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      {from.from === "login" && (
        <>
          {" "}
          <p>
            You have been redirected to this page from the {`"/login"`} route
          </p>
          <p>
            When you try to access the {`"/login"`} route while being logged in,
            you get sent here.
          </p>
        </>
      )}
      {from.from === "profile" && (
        <>
          {" "}
          <p>
            You have been redirected to this page from the {`"/profile"`} route
          </p>
          <p>
            When you try to access the {`"/profile"`} route without being logged
            in, you get sent here.
          </p>
        </>
      )}
    </div>
  );
};
