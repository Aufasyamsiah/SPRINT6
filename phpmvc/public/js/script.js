$(function() {

    $('.tombolTambahData').on('click', function() { 

        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');

    });  


    $('.tampilModalUbah').on('click', function() { 

        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/Kurikulum-Backend/SPRINT6/phpmvc/public/Mahasiswa/ubah');

        const id = $(this).data('id');


        $.ajax({
            url: 'http://localhost/Kurikulum-Backend/SPRINT6/phpmvc/public/Mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    });

});



