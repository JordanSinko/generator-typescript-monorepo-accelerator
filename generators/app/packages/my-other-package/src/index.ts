interface SayByeParams {
  name?: string;
}

export const sayBye = async (params: SayByeParams) => {
  return `See ya, ${params.name ?? "World"}`;
};
