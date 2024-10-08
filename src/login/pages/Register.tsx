import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { LangSelect } from "../components/lang-select";

export default function Register(props: PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n>) {
  const { kcContext, i18n, Template } = props;

  const { msgStr } = i18n;

  const { url } = kcContext;

  return (
    <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={false} headerNode={null}>
      <div>
        <div className="flex justify-center items-center gap-6 mt-[90px] mb-[30px]">
          <h1 className="text-center font-bold text-2xl">{msgStr("createUser")}</h1>

          <LangSelect {...props} />
        </div>

        <form action={url.registrationAction} method="post">
          <div className="flex justify-between w-[1200px] mx-auto">
            <div>
              <div className="relative w-[500px] z-0 mb-5 group">
                <input
                  type="username"
                  name="username"
                  id="register_username"
                  className="block py-2.5 px-0 w-[500px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {msgStr("email")}
                </label>
              </div>
              <div className="relative z-0 w-[500px] mb-5 group">
                <input
                  type="password"
                  name="password"
                  id="register_password"
                  className="block py-2.5 px-0 w-[500px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {msgStr("password")}
                </label>
              </div>
              {/* <div className="relative z-0 w-[500px] mb-5 group">
                <input
                  type="password"
                  name="repeat_password"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-[500px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {msgStr("confirmPassword")}
                </label>
              </div> */}
            </div>
            <div>
              <div className="relative z-0 w-[500px] mb-5 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block py-2.5 px-0 w-[500px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="firstName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {msgStr("firstName")}
                </label>
              </div>
              <div className="relative z-0 w-[500px] mb-5 group">
                <input
                  type="text"
                  name="lastName"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-[500px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="lastName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {msgStr("lastName")}
                </label>
              </div>
              {/* <div className="relative z-0 w-[500px] mb-5 group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-[500px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {msgStr("phoneNumber")}
                </label>
              </div> */}
              <div className="relative z-0 w-[500px] mb-5 group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block py-2.5 px-0 w-[500px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {msgStr("company")}
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="block mt-[50px] mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[500px] px-5 py-2.5 text-center"
          >
            {msgStr("register")}
          </button>

          <p className="mt-[40px] text-center">
            {msgStr("haveAccount")}
            <a href={url.loginUrl} className="font-bold text-primary-600 hover:underline ml-[10px]">
              {msgStr("signIn")}
            </a>
          </p>
        </form>
      </div>
    </Template>
  );
}
