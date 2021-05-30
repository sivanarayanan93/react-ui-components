const colors = {
  primaryBgColor: "#12344d",
  primaryBorderColor: "#264966",
  primaryFocusColor: "#2c5cc5",
  secondaryHoverBgColor: "#f3f5f7",
  secondaryBorderColor: "#ebeff3",
  dangerBgColor: "#c82124"
};

export const sizes = {
  inputHeight: {
    "sm": '24px',
    "md": "32px",
    "lg": "40px"
  }
}

export const ButtonThemes = {
  base: {
    focus: {
      border: '2px solid ' + colors.primaryFocusColor,
      boxShadow: '0 0 0 1px ' + colors.primaryFocusColor
    }
  },
  primary: {
    backgroundColor: '#264966',
    color: 'white',
    border: '1px solid #12344d',
    backgroundImage: 'linear-gradient(to bottom, #264966, #12344d)',
    hover: {
      backgroundColor: colors.primaryBgColor,
      backgroundImage: "none"
    },
    active: {
      border: '1px solid ' + colors.primaryBorderColor,
      boxShadow: "inset 0 0 4px 0 rgb(0 0 0 / 25%)"
    },
    disabled: {
      color: "#cfd7df",
      border: "1px solid #7b8e9f",
      backgroundImage: "linear-gradient(to bottom, #92a2b1, #7b8e9f)"
    }
  },
  secondary: {
    backgroundColor: '#f3f5f7',
    color: '#12344d',
    border: '1px solid #cfd7df',
    backgroundImage: 'linear-gradient(to bottom, white, #f3f5f7)',
    hover: {
      backgroundColor: colors.secondaryHoverBgColor,
      backgroundImage: "none"
    },
    active: {
      border: '1px solid ' + colors.secondaryBorderColor,
      boxShadow: 'inset 0 0 4px 0 rgb(0 0 0 / 25%)'
    },
    disabled: {
      color: "#92a2b1",
      border: "1px solid #cfd7df",
      backgroundImage: "none",
      backgroundColor: "#ebeff3",
    }
  },
  danger: {
    color: 'white',
    backgroundColor: '#d72d30',
    border: '1px solid #c82124',
    backgroundImage: 'linear-gradient(to bottom, #d72d30, #c82124)',
    hover: {
      backgroundColor: colors.dangerBgColor,
      backgroundImage: 'none'
    },
    disabled: {
      border: "1px solid #f2797b",
      color: '#ffd0d6',
      backgroundImage: "linear-gradient(to bottom, #f89fa1, #f2797b)"
    }
  }
}