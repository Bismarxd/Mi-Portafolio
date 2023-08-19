import Typewriter from "typewriter-effect"

const AnimacionLetras = ({palabras}) => {
  return (
    <div className="ml-10">
      <Typewriter
        options={{
          strings:palabras,
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />
    </div>
  );
}

export default AnimacionLetras