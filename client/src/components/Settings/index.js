import { useAuth } from "../../util/auth";

function Settings() {
  const auth = useAuth();

  return (
    <>
      <div className="items-center">Hello</div>
    </>
  );
}

export default Settings;
