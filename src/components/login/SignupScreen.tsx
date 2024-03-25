import { SecurityProvider } from "../../contexts/SecurityContext";
import Layout from "../common/layout/Layout";
import { useParams } from "react-router-dom";
import SignupForm from "./SignupForm";

const Content = (props: { type: "signup" | "login" }) => {
  const { requestId } = useParams();
  return (
    <>
      <Layout
        header="LamaLab"
        content={
          <section className="flex justify-center">
            {requestId ? (
              <SignupForm type={props.type} requestId={requestId} />
            ) : (
              <SignupForm type={props.type} />
            )}
          </section>
        }
        isLogin={true}
      />
    </>
  );
};

const SignupScreen = (props: { type: "signup" | "login" }) => {
  return (
    <SecurityProvider>
      <Content type={props.type} />
    </SecurityProvider>
  );
};

export default SignupScreen;
