import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import ReactBeautifulDND from "../ReactBeautifulDND";
import Modal from "../Modal";
import IdeaPageHeader from "../IdeaPageHeader";
import ResetButton from "../ResetButton";
import IdeaPageTips from "../IdeaPageTips";

function IdeaPage() {
  const [open, setOpen] = useState(true);
  const history = useHistory();
  const auth = useAuth();

  return (
    <>
      <div className="items-center">
        <IdeaPageHeader onClick={() => setOpen(true)}/>
        <ReactBeautifulDND />
        <ResetButton />
        <IdeaPageTips />
        <Modal show={open} onClick={() => setOpen(false)} />

        {/* hide actions if user is logged in */}
        {!auth.isLoggedIn() && (
          <>
            <button onClick={() => history.push("/login")}></button>
            <button onClick={() => history.push("/signup")}></button>
          </>
        )}
      </div>
    </>
  );
}

export default IdeaPage;
