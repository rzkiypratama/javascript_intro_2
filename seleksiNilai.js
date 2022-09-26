const dataArr = [2, 25, 4, 14, 18, 19];

    function seleksiNilai (nilaiAwal, nilaiAkhir, dataArr) {
        if (typeof nilaiAwal !== "number" && typeof nilaiAkhir !== "number") return "nilai awal & akhir harus berupa number!";
        if (typeof nilaiAwal !== "number") return "nilai awal harus number!"
        if (typeof nilaiAkhir !== "number") return "nilai akhir harus number!"
        if (nilaiAwal > nilaiAkhir) return "Nilai akhir harus lebih besar dari nilai awal";
        if (dataArr.length <= 5) return "Jumlah data harus lebih dari 5";
        

        const result = dataArr.filter(n => n > nilaiAwal && n < nilaiAkhir);
        return result.sort((a, b) => {b - a});
        }
    
    console.log(seleksiNilai('2', 20, dataArr));

        
