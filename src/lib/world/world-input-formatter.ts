const formatWorldInput = (input) => {
  if (!input) return;

  const splitWorldInput = input.split(' ');

  const width = Number(splitWorldInput[0]);
  const height = Number(splitWorldInput[1]);

  return { width, height };
};

export default formatWorldInput;
