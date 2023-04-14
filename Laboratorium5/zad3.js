function all(){
    const liczby = [2, 5, 7, 8, 11, 14, 16, 19, 22, 26];
    const suma = liczby.reduce((acc, curr) => acc + curr);
    console.log(`Suma liczb w tablicy: ${suma}`);

    const parzyste = liczby.filter((liczba) => liczba % 2 === 0);
    console.log(`Liczby parzyste w tablicy: ${parzyste}`);

    const pomnozone = liczby.map((liczba) => liczba * 3);
    console.log(`Wartości pomnożone przez 3: ${pomnozone}`);

    const numer_albumu = 68139;
    liczby.push(numer_albumu);
    const index_albumu = liczby.indexOf(numer_albumu);
    console.log(`Index numeru albumu (${numer_albumu}) w tablicy: ${index_albumu}`);

    const srednia = suma / liczby.length;
    console.log(`Średnia arytmetyczna: ${srednia}`);

    const najwieksza = Math.max(...liczby);
    console.log(`Największa liczba w tablicy: ${najwieksza}`);

    const wybrana = 11;
    const wystapienia = liczby.filter((liczba) => liczba === wybrana).length;
    console.log(`Liczba wystąpień liczby ${wybrana}: ${wystapienia}`);
}
all()