function chuyendoi() {
    let a = Number(document.getElementById("so tien").value);
    let b = document.getElementById("tiendau").value;
    let c = document.getElementById("tiencuoi").value;
    let y = 0;
    if (b == "1" & c == "2") {
        y = a / 23000;
    } else if (b == "2" & c == "1") {
        y = a * 23000;
    }
    document.getElementById("ket qua").innerHTML = y;
}