const Button = {
  variants: {
    solid: {
      bg: 'rocketShades.500',
      color: 'white',
      textTransform: 'uppercase',
      _hover: { bg: 'rocketShades.300', svg: { fill: 'black' } },
      _active: {
        bg: 'rocketShades.200',
        svg: { fill: 'white' },
      },
    },
    outline: {
      bg: 'rocketShades.500',
      color: 'white',
      textTransform: 'uppercase',
      _hover: { bg: 'rocketShades.300', svg: { fill: 'black' } },
      _active: {
        bg: 'rocketShades.200',
        svg: { fill: 'white' },
      },
    },
  },
};

export { Button };
