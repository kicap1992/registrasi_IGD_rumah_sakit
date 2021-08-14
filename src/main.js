function logout(){
  swal({
    title: "Yakin ingin Logout?",
    text: "Anda akan keluar dari sistem",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((logout) => {
    if (logout) {
      localStorage.removeItem("nik");
      localStorage.removeItem("level");
      window.location.href ='../index.html';
    } else {
      swal("Terima kasih kerana masih di sistem");
    }
  });
}

function toastnya(mesej){
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };

  toastr.error("<center>"+mesej+"</center>");
  // $("#"+id).focus();
}

function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57 ))
      return false;
  return true;
  // console.log(evt.key)
}

function myFunction(a) {
  var x = $("#"+a);
  var xx = document.getElementById(a);

  
  if (xx.style.display === "none") {
    x.slideToggle();
  } else {
    x.slideToggle();
  }
}

function objectifyForm(formArray) {
  //serialize data function
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function block_ui(){
  $.blockUI({ 
    message: "Sedang Diproses", 
    css: { 
    border: 'none', 
    padding: '15px', 
    backgroundColor: '#000', 
    '-webkit-border-radius': '10px', 
    '-moz-border-radius': '10px', 
    opacity: .5, 
    color: '#fff' 
  } });
}

function nama_bulan(val){
  let nama_bulan;
  if (val == 1 || val == '01') {
    nama_bulan = 'Januari'
  } else if (val == 2 || val == '02') {
    nama_bulan = 'Februari'
  } else if (val == 3 || val == '03') {
    nama_bulan = 'Maret'
  } else if (val == 4 || val == '04') {
    nama_bulan = 'April'
  } else if (val == 5 || val == '05') {
    nama_bulan = 'Mei'
  } else if (val == 6 || val == '06') {
    nama_bulan = 'Juni'
  } else if (val == 7 || val == '07') {
    nama_bulan = 'Juli'
  } else if (val == 8 || val == '08') {
    nama_bulan = 'Agustus'
  } else if (val == 9 || val == '09') {
    nama_bulan = 'September'
  } else if (val == 10 || val == '10') {
    nama_bulan = 'Oktober'
  } else if (val == 11 || val == '11') {
    nama_bulan = 'November'
  } else if (val == 12 || val == '12') {
    nama_bulan = 'Desember'
  }

  return nama_bulan;
}

function $_GET(param) {
  var vars = {};
  window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );

  if ( param ) {
    return vars[param] ? vars[param] : null;	
  }
  return vars;
}