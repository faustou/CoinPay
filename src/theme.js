
const LightTheme = {
  text: "black",
  toggle: "green",
  primary: "#9400D3",
  terciary: 'black',
  hover: "black",
  bgc: "#00c3ff",
  spaceAnimation: "radial-gradient(circle, #00c3ff 20%,#9400D3 100%)",
}

const DarkTheme = {
  text: "white",
  toggle: "green",
  primary: "#9400D3",
  terciary: 'white',
  hover: "",
  bgc: "black",
  spaceAnimation: "radial-gradient(circle, black 20%,#9400D3 100%)",
}

const theme = {
  light: LightTheme,
  dark: DarkTheme,
    //colors: {
    //  primary: '#9400D3', //${props => props.theme.colors.primary} #FFD6E8
    //  secondary: 'black', //${props => props.theme.colors.secondary}
    //  tertiary: 'white', //${props => props.theme.colors.tertiary}
    //},
  };

export default theme;