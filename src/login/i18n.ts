import { createUseI18n } from "keycloakify/login";

export const { useI18n, ofTypeI18n } = createUseI18n({
    en: {
        kermi: "kermi"
    },
    ru: {
        kermi: "керми"
    }
});

export type I18n = typeof ofTypeI18n;
