import { Tabs } from "antd";
import SignupForm from "@/components/forms/SignupForm";
import LoginForm from "./forms/LoginForm";
import { useTranslation } from "react-i18next";

interface Props {
  loginFormId?: string;
  signupFormId?: string;
  onAuth?: () => void;
  onForgotPwd?: () => void;
}
const AuthTabs: React.FC<Props> = ({ loginFormId, signupFormId, onAuth, onForgotPwd }) => {
  const { t } = useTranslation();

  return (
    <Tabs size="large">
      <Tabs.TabPane key="signup" tab={t("who.signup")}>
        <SignupForm id={signupFormId} onSubmit={onAuth} />
      </Tabs.TabPane>
      <Tabs.TabPane key="login" tab={t("who.login")}>
        <LoginForm id={loginFormId} onSubmit={onAuth} onForgotPwd={onForgotPwd} />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default AuthTabs;
