let soNgauNhien = Math.floor(Math.random() * 10) + 1;

function doanSo() {
    let soNguoiDungNhap = parseInt(document.getElementById("soNhap").value);

    if (isNaN(soNguoiDungNhap)) {
        document.getElementById("ketQua").innerHTML = "Invalid input";
        return;
    }

    if (soNguoiDungNhap === soNgauNhien) {
        document.getElementById("ketQua").innerHTML = "juan r! choi lai nao";
        soNgauNhien = Math.floor(Math.random() * 10) + 1;
    } else {
        document.getElementById("ketQua").innerHTML = "sai r.";
    }
}
