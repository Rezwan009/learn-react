import clsx from "clsx";
import { languages } from "../constant/languages";

const LanguageChips = ({ wrongGuessCount }) => {
  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    console.log(isLanguageLost);
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });
  return <section className="language-chips">{languageElements}</section>;
};

export default LanguageChips;
