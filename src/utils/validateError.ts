export const validateError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unexpected error occurred. Contact support";
};
