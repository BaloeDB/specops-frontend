import { useParams } from "react-router-dom";
import SignupScreen from "./components/login/SignupScreen";

const Signup = () => {
  const { requestId } = useParams();

  return (
    <>
      <SignupScreen type="signup" requestId={requestId} />;
    </>
  );
};

export default Signup;
