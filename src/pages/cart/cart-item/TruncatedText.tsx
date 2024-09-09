


type TextType = {
    text: string;
    wordLimit: number;
    type: "p" | "h3";
}


const TruncatedText = ({ text, wordLimit }: TextType) => {
  const truncatedText =
    text?.split(" ").slice(0, wordLimit).join(" ") +
    (text?.split(" ").length > wordLimit ? "..." : "");

  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-ellipsis overflow-hidden">
      {truncatedText}
    </p>
  );
};

export default TruncatedText;
