const nama = [
        'Abigai', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope']

function searchName (search, jumlahDiCari, cb) {
    // validasi
    if (typeof search !== "string") return "input harus berupa string"
    if (typeof jumlahDiCari !== "number") return "input harus berupa number"
    if (typeof cb !== "function") return "input harus berupa function"
    if (jumlahDiCari <= 0) return "input harus lebih besar dari 0"

    let nameArr = [];
    for (let i = 0; i < nama.length; i++) {
       if (nameArr.length < jumlahDiCari && cb(nama[i], search)) {
        nameArr.push(nama[i])
    }}
    return nameArr

    
}

const seleksiArr = (el, searched) => {
    return el.toLowerCase().includes(searched);
}
console.log(searchName("an", 3, seleksiArr));