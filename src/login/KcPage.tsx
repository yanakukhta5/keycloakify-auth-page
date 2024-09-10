import { Suspense, lazy } from "react";

import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "keycloakify/login/Template";
const UserProfileFormFields = lazy(
  () => import("keycloakify/login/UserProfileFormFields")
);

import { useI18n } from "./i18n";

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
  const { kcContext } = props;

  const { i18n } = useI18n({ kcContext });

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case "register.ftl":
            return (
              <Register
                {...{ kcContext, i18n, classes }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );

          case "login.ftl":
            return (
              <Login
              {...{ kcContext, i18n, classes }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );

          default:
            return (
              <DefaultPage
                kcContext={kcContext}
                i18n={i18n}
                classes={classes}
                Template={Template}
                doUseDefaultCss={true}
                UserProfileFormFields={UserProfileFormFields}
                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
              />
            );
        }
      })()}
    </Suspense>
  );
}

const classes = {} satisfies { [key in ClassKey]?: string };
