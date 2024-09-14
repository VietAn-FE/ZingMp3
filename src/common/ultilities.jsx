export const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const shuffleArray = (array, radioId) => {
    let newAray = [...array];
    let indexItemPlay = newAray.findIndex((item) => item.radioId == radioId);
    let itemPlay = newAray.splice(indexItemPlay, 1);
    for (let i = newAray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newAray[i], newAray[j]] = [newAray[j], newAray[i]];
    }
    newAray.unshift(...itemPlay);
    return newAray;
}