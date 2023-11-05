const cardStyle: React.CSSProperties = {
  backgroundImage: 'url("https://user-images.githubusercontent.com/10141928/147431083-48106e7a-9aed-4108-8ef6-8a666bd48b5a.jpeg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "20px",
};

const imageStyle: React.CSSProperties = {

  width: "43%",
  height: "auto",
};

// const textContainerStyle: React.CSSProperties = {
//   textAlign: "center",
// };

const textBlockStyle: React.CSSProperties = {
  animationFillMode: "both",
  animationDuration: "1000ms",
  animationDelay: "0ms",
  animationIterationCount: "1",
  opacity: 1,
  animationName: "react-reveal-656229283932772-1",
};

const MyCard: React.FC = () => {
  return (
    <div style={cardStyle}>

      <center style={{ color:"black" }}>
        <div style={textBlockStyle}>
          <img
            className="chakra-image css-5rhrdz"
            src="https://user-images.githubusercontent.com/10141928/147430936-5f48a973-d077-4822-bd5d-a792c58040e2.jpeg"
            style={imageStyle}
            alt="Your Image"
          />
        </div>

        <div style={textBlockStyle}>
          <p className="chakra-text css-3yb62k">
            "And of all things We created two mates [i.e., counterparts]; perhaps you will remember."
          </p>
        </div>

        <div style={textBlockStyle}>
          <p className="chakra-text css-18kv6tl">(Az-Zariyat 51:49)</p>

        </div>
      </center>

    </div>

  );
};

export default MyCard;
