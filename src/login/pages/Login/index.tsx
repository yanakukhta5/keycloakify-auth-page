import type { PageProps } from "keycloakify/login/pages/PageProps";

import type { I18n } from "../../i18n";
import type { KcContext } from "../../KcContext";
import { Text } from "./Text";
import { LangSelect } from "../../components/lang-select";

export default function Login(
  props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>
) {
  const { kcContext, i18n, Template } = props;

  const { msgStr } = i18n;

  const { realm, url } = kcContext;

  return (
    <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={false} headerNode={null}>
      <section className="bg-gray-50 flex justify-center gap-[100px] pr-[60px]">
        <Text i18n={i18n} />

        <div className="flex flex-col items-center justify-center md:h-screen lg:py-0 w-[500px]">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  {msgStr("signIn")}
                </h1>

                <LangSelect {...props} />
              </div>

              <form
                className="space-y-4 md:space-y-6"
                action={url.loginAction}
                method="post"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {msgStr("login")}
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                    id="username"
                    name="username"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {msgStr("password")}
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-blue-50 focus:ring-3 focus:ring-primary-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        {msgStr("rememberMe")}
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    {msgStr("forgotPassword")}
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {msgStr("signInShort")}
                </button>

                {realm.registrationAllowed && (
                  <p className="text-sm font-light text-gray-500">
                    {msgStr("noAccount")}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <a
                      href={url.registrationUrl}
                      className="font-bold text-primary-600 hover:underline ml-[10px]"
                    >
                      {msgStr("signUp")}
                    </a>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}
