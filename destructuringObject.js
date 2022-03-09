const band = { // to get this output
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
};

// const bandName = band.bandName;         // one way
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// shortcut way

const { bandName, famousSong } = band;
console.log(bandName);