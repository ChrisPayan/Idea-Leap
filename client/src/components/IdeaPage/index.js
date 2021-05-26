import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import { Directions } from "../Directions/Directions";
import ReactBeautifulDND from "../ReactBeautifulDND";
function IdeaPage() {
  const history = useHistory();
  const auth = useAuth();

  return (
    <>
      <Directions />
      <ReactBeautifulDND />

      {/* hide actions if user is logged in */}
      {!auth.isLoggedIn() && (
        <>
          <button onClick={() => history.push("/login")}></button>
          <button onClick={() => history.push("/signup")}></button>
        </>
      )}
    </>
  );
}

export default IdeaPage;
