import { SecurityProvider } from "../../contexts/SecurityContext";
import Layout from "../common/layout/Layout";
import { useParams } from "react-router-dom";
import SignupForm from "./SignupForm";

const Content = (props: { type: "signup" | "login"; requestId?: string }) => {
  return (
    <>
      <Layout
        header="LamaLab"
        content={
          <section className="flex justify-center">
            {props.requestId ? (
              <SignupForm type={props.type} requestId={props.requestId} />
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
  const { requestId } = useParams();

  return (
    <SecurityProvider>
      <Content type={props.type} requestId={requestId} />
    </SecurityProvider>
  );
};

export default SignupScreen;
