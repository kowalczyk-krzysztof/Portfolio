/* This is just a simple check to see if email is in valid format

foo@bar.x will return true 

Obviously this is not ideal, and sending an confirmation e-mail would be the best way to handle this but I think this is too much for such a simple website
*/
export const regexCheck = (input: string): boolean => {
  const regex = new RegExp(/^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/);

  return regex.test(input);
};
