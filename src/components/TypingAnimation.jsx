import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["Front-End Web Developer", "Technology Enthusiast"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
