import "./animated.css";

const AnimatedMeshGradient = () => {
  return (
    <div className="relative w-full h-screen ">
      <div className="absolute top-1/6 right-1/12 w-32 h-32 rounded-full bg-white opacity-30  animate-circle1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:400%_400%] animate-gradientBackground shadow-lg"></div>
      <div className="absolute top-1/6 right-1/6 w-32 h-32 rounded-full bg-white opacity-30  animate-circle1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:400%_400%] animate-gradientBackground shadow-lg"></div>
      <div className="absolute top-1/4 right-1/6 w-32 h-32 rounded-full bg-white opacity-30  animate-circle1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:400%_400%] animate-gradientBackground shadow-lg"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-white opacity-30  animate-circle1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:400%_400%] animate-gradientBackground shadow-[0_25px_50px_rgba(0,0,0,0.2)]"></div>


    </div>
  );
};

export default AnimatedMeshGradient;
