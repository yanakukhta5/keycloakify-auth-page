import { useEffect } from "react";

import { assert } from "keycloakify/tools/assert";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { clsx } from "keycloakify/tools/clsx";
import { useInsertScriptTags } from "keycloakify/tools/useInsertScriptTags";
import { useInsertLinkTags } from "keycloakify/tools/useInsertLinkTags";
import { useSetClassName } from "keycloakify/tools/useSetClassName";

import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import { Text } from "./Text";

export default function Template(props: TemplateProps<KcContext, I18n>) {
  const { documentTitle, bodyClassName, kcContext, i18n, doUseDefaultCss, classes } = props;

  const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

  const { msgStr, getChangeLocaleUrl, labelBySupportedLanguageTag, currentLanguageTag } = i18n;

  const { realm, locale, url, authenticationSession, scripts } = kcContext;

  useEffect(() => {
    document.title = documentTitle ?? msgStr("loginTitle", kcContext.realm.displayName);
  }, []);

  useSetClassName({
    qualifiedName: "html",
    className: kcClsx("kcHtmlClass")
  });

  useSetClassName({
    qualifiedName: "body",
    className: bodyClassName ?? kcClsx("kcBodyClass")
  });

  useEffect(() => {
    const { currentLanguageTag } = locale ?? {};

    if (currentLanguageTag === undefined) {
      return;
    }

    const html = document.querySelector("html");
    assert(html !== null);
    html.lang = currentLanguageTag;
  }, []);

  const { areAllStyleSheetsLoaded } = useInsertLinkTags({
    componentOrHookName: "Template",
    hrefs: !doUseDefaultCss
      ? []
      : [
          `${url.resourcesCommonPath}/node_modules/@patternfly/patternfly/patternfly.min.css`,
          `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
          `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
          `${url.resourcesCommonPath}/lib/pficon/pficon.css`,
          `${url.resourcesPath}/css/login.css`
        ]
  });

  const { insertScriptTags } = useInsertScriptTags({
    componentOrHookName: "Template",
    scriptTags: [
      {
        type: "module",
        src: `${url.resourcesPath}/js/menu-button-links.js`
      },
      ...(authenticationSession === undefined
        ? []
        : [
            {
              type: "module",
              textContent: [
                `import { checkCookiesAndSetTimer } from "${url.resourcesPath}/js/authChecker.js";`,
                ``,
                `checkCookiesAndSetTimer(`,
                `  "${authenticationSession.authSessionId}",`,
                `  "${authenticationSession.tabId}",`,
                `  "${url.ssoLoginInOtherTabsUrl}"`,
                `);`
              ].join("\n")
            } as const
          ]),
      ...scripts.map(
        script =>
          ({
            type: "text/javascript",
            src: script
          }) as const
      )
    ]
  });

  useEffect(() => {
    if (areAllStyleSheetsLoaded) {
      insertScriptTags();
    }
  }, [areAllStyleSheetsLoaded]);

  if (!areAllStyleSheetsLoaded) {
    return null;
  }

  return (
    <section className="bg-gray-50 flex justify-center gap-[100px] pr-[60px]">
      <Text i18n={i18n} />

      <div className="flex flex-col items-center justify-center md:h-screen lg:py-0 w-[500px]">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">{msgStr("signIn")}</h1>

              {realm.internationalizationEnabled && (assert(locale !== undefined), locale.supported.length > 1) && (
                <div className={kcClsx("kcLocaleMainClass")} id="kc-locale">
                  <div id="kc-locale-wrapper" className={kcClsx("kcLocaleWrapperClass")}>
                    <div id="kc-locale-dropdown" className={clsx("menu-button-links", kcClsx("kcLocaleDropDownClass"))}>
                      <button
                        tabIndex={1}
                        id="kc-current-locale-link"
                        aria-label={msgStr("languages")}
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-controls="language-switch1"
                      >
                        {labelBySupportedLanguageTag[currentLanguageTag]}
                      </button>
                      <ul
                        role="menu"
                        tabIndex={-1}
                        aria-labelledby="kc-current-locale-link"
                        aria-activedescendant=""
                        id="language-switch1"
                        className={kcClsx("kcLocaleListClass")}
                      >
                        {locale.supported.map(({ languageTag }, i) => (
                          <li key={languageTag} className={kcClsx("kcLocaleListItemClass")} role="none">
                            <a
                              role="menuitem"
                              id={`language-${i + 1}`}
                              className={kcClsx("kcLocaleItemClass")}
                              href={getChangeLocaleUrl(languageTag)}
                            >
                              {labelBySupportedLanguageTag[languageTag]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  {msgStr("login")}
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  {msgStr("password")}
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
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
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">
                  {msgStr("forgotPassword")}
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {msgStr("signInShort")}
              </button>
              <p className="text-sm font-light text-gray-500">
                {msgStr("noAccount")}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <a href={url.registrationUrl} className="font-bold text-primary-600 hover:underline ml-[10px]">
                  {msgStr("signUp")}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
