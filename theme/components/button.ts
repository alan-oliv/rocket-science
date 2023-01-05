const Button = {
  variants: {
    solid: {
      bg: 'rocketShades.500',
      color: 'white',
      textTransform: 'uppercase',
      _hover: {
        bg: 'rocketShades.300',
        svg: { fill: 'rocketShades.100', transition: 'fill 0.8s ease' },
      },
      _active: {
        bg: 'rocketShades.200',
        svg: { fill: 'white' },
      },
    },
    outline: {
      bg: 'rocketShades.500',
      color: 'white',
      textTransform: 'uppercase',
      _hover: {
        bg: 'rocketShades.300',
        svg: { fill: 'rocketShades.100' },
      },
      _active: {
        bg: 'rocketShades.200',
        svg: { fill: 'white' },
      },
    },
  },
};

export { Button };
