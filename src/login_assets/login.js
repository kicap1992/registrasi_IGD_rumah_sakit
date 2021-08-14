// console.log(localStorage.removeItem("level"))
// console.log(localStorage.removeItem("nip_user"))

if (localStorage.removeItem("level") != null && localStorage.removeItem("nip_user") != null) {
  cek_login(localStorage.removeItem("nip_user"),localStorage.removeItem("level"))
}

function loginnya() {
	var username = $("#username");
	var password = $("#password");
	if (username.val() == '' || username.val() == null) {
		toastnya('username','Username tidak boleh kosong')
	}
	else if (password.val() == '' || password.val() == null) {
		toastnya('password','Password tidak boleh kosong')
	}
	else{
		$.ajax({
      url: url+"api/login",
      type: 'get',
      data: {username : username.val(), password : password.val()},
      // dataType: 'json',
      beforeSend: function(res) {                   
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
      },
      success: function (response) {
      	$.unblockUI();
        console.log(response);
        localStorage.setItem("level", response.data.id_jabatan)
        localStorage.setItem('nip_user', response.data.nip_user)
        cek_login(localStorage.getItem('nip_user'),localStorage.getItem('level'));

        // var response = JSON.parse(response);
        // if (response.ket == '1') {
        // 	window.location.replace(url+'admin');
        // }
        // else if (response.ket == '0') {
        // 	swal({
		    //     text: "Username dan Password Salah",
		    //     title: "Login Gagal",
		    //     icon: "error",
		    //     buttons: false
		    //   });
        // }
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
      	$.unblockUI();
        switch (XMLHttpRequest.status) {
          case 400:
            toastnya('username','Username dan Password Salah, Sila masukkan kembali Username dan Password')
            break;
        
          case 0:
            toastnya('username','Server Mati atau dalam Maintainance')
            break;
        }
        
      } 
    });
	}
}


function cek_login(nip_user,level){
  console.log
  if (level == 1) {
    window.location.replace('admin_registrasi/index.html');
  }
}

function toastnya(id,mesej){
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
  $("#"+id).focus();
}