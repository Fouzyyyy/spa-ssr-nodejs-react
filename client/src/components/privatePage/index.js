import { LanguageProvider } from "../languageProvider";
import { IsUserLoggedInProvider } from "../userContext";
import { Content } from "./content";

export const PrivatePage = () => {
    return <LanguageProvider>
                <IsUserLoggedInProvider>
                    <Content />
                </IsUserLoggedInProvider>
            </LanguageProvider>;
}