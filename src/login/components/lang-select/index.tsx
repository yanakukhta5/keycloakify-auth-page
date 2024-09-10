import { assert } from "keycloakify/tools/assert";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { clsx } from "keycloakify/tools/clsx";

import { type I18n } from "../../i18n";
import type { KcContext } from "../../KcContext";

export const LangSelect = (props: PageProps<Extract<KcContext, unknown>, I18n>) => {
  const { kcContext, i18n, doUseDefaultCss, classes } = props;

  const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

  const { msgStr, getChangeLocaleUrl, labelBySupportedLanguageTag, currentLanguageTag } =
    i18n;

  const { realm, locale } = kcContext;

  if (
    !realm.internationalizationEnabled ||
    !(assert(locale !== undefined), locale.supported.length > 1)
  ) {
    return null;
  }

  return (
    <div className={kcClsx("kcLocaleMainClass")} id="kc-locale">
      <div id="kc-locale-wrapper" className={kcClsx("kcLocaleWrapperClass")}>
        <div
          id="kc-locale-dropdown"
          className={clsx("menu-button-links", kcClsx("kcLocaleDropDownClass"))}
        >
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
              <li
                key={languageTag}
                className={kcClsx("kcLocaleListItemClass")}
                role="none"
              >
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
  );
};
