/*
*Bài tập 1:Thông báo kết quả điểm thi đại học
+Đầu vào
- nhập điểm chuẩn
- nhập khu vực
- nhập đối tượng
-nhập điểm ba môn
+Xử lý
- dùng funtion để tính tổng điểm 3 môn+ điểm khu vực + điểm đối tượng
- điều khiện đậu nếu tổng điểm 3 môn >= điểm chuẩn và không có môn nào bị điểm 0
- rớt nếu có môn bị điểm 0 hoặc tổng điểm 3 môn < điểm chuẩn
+ thông báo kết quả và tổng điểm của thí sinh.
 */
function tongDiem(a,b,c,d,e){
    if (d==="A"&&e===1){
        var result= a+b+c+4.5;
    }else if(d==="A"&&e===2||d==="B"&&e===1||d==="C"&&e===1){
        var result=a+b+c+3.5;
    }else if(d==="A"&&e===3){
        var result=a+b+c+3;
    }
    else if(d==="B"&&e===2){
        var result=a+b+c+2.5;
    }else if(d==="B"&&e===3||d==="C"&&e===2){
        var result=a+b+c+2;
    }
    else if(d==="C"&&e===3){
        var result=a+b+c+1.5;
    }else{
        var result=a+b+c;
    }
    return result;
}
document.getElementById("tongDiem").onclick=function(){
    var diemChuanDH=document.getElementById("diemChuan").value * 1;
    var diemKhuVucUT=document.getElementById("diemKhuVuc").value;
    var diemDoiTuongUT=document.getElementById("diemDoiTuong").value * 1;
    var diemToan=document.getElementById("monToan").value * 1;
    var diemLy=document.getElementById("monLy").value * 1;
    var diemHoa=document.getElementById("monHoa").value * 1;
var sum= tongDiem(diemToan,diemLy,diemHoa,diemKhuVucUT,diemDoiTuongUT);
if(sum>=diemChuanDH&&diemToan!==0&&diemLy!==0&&diemHoa!==0){
    var result="Chúc mừng bạn đã đỗ đại học với tổng điểm là: "+sum;
} else if(sum<diemChuanDH&&diemToan!==0&&diemLy!==0&&diemHoa!==0){
    var result="Bạn không đỗ đại học với tổng điểm là: "+sum;
}else {
    var result="Bạn không đỗ đại học do có điểm 0 với tổng điểm là:"+sum;
}
    document.getElementById("ketQua1").innerHTML=result;
};

/*
*Bài 2: tính tiền điện
+Đầu vào
- nhập họ tên và lượng điện tiêu thụ trong tháng
+ Xử lý
-tiêu thụ 50kw/h, giá 500đ
giá tiền=lượng tieu thụ *500đ
- 50kw/h tiếp theo (50kw/h< lượng tiêu thụ <=100kw/h), giá 650đ
giá tiền= 50*500+( lượng tiêu thụ -50)*650
-100kw/h tiếp theo (100kw/h< lượng tiêu thụ<=200kw/h), giá 850đ
giá tiền =50*500+50*650+(lượng tiêu thụ -100)*850
-150kw/h tiếp theo (200< lượng tiêu thụ<=350kw/h), giá 1100đ
giá tiền =50*500+50*650+100*850+(lượng tiêu thụ-200)*1100
-trên 350kw/h giá 1300đ
giá tiền =50*500+50*650+100*850+150*1100+(lượng tiêu thụ-350)*1300
+ Đầu ra
hiển thị tên và số tiền điện phải chi trả
 */

function thanhTien(a){
if (a<=50){
    var thanhToan=a * 500;
}else if(a>50&&a<=100){
    var thanhToan=50*500+(a-50)*650;
}else if(a>100&&a<=200){
    var thanhToan=50*500+50*650+(a-100)*850;
}else if(a>200&&a<=350){
    var thanhToan= 50*500+50*650+50*850+(a-200)*1100;
}else{
    var thanhToan= 50*500+50*650+100*850+150*1100+(a-350)*1300;
}

return thanhToan;
}

document.getElementById("tinhTienDien").onclick=function(){
    var hoTen =document.getElementById("nhapTen").value;
    var luongDienTieuThu =document.getElementById("dienNangTieuThu").value*1;
    var curreentFormat=new Intl.NumberFormat("vn-VN");
    var result="Số tiền thanh toán của "+hoTen+" là " +curreentFormat.format(thanhTien(luongDienTieuThu));
    document.getElementById("ketQua2").innerHTML=result;
};