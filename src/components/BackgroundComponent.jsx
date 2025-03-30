
const BackgroundComponent = () => {
  const style = {
    backgroundColor: '#ffffff',
    backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.58' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')",
    height: '100vh', // Puedes ajustarlo según tus necesidades
    width: '100%',
  };

  return <div style={style}></div>;
};

export default BackgroundComponent;