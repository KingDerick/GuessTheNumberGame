let highScore = 0;

export function UpdateHighScore(score) {
    if (score > highScore) {
        highScore = score;
    }
}

export function GetHighScore() {
    return highScore;
}
