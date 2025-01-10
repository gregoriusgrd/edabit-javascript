//Frames Per Second

function frames(minutes, fps) {
    const totalFrames = (minutes * 60) * fps;
    return totalFrames;
 }
 
 console.log(frames(1, 1)); // ➞ 60
 console.log(frames(10, 1)); // ➞ 60
 console.log(frames(10, 25)); // ➞ 60