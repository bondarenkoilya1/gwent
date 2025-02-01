export const saveCurrentScore = (currentScore: number) =>
  window.addEventListener("beforeunload", () =>
    localStorage.setItem("currentScore", JSON.stringify(currentScore))
  );
