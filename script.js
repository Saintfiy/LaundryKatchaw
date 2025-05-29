function showTab(tabName) {
    // Sembunyikan semua tab konten
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Hapus kelas aktif dari semua tombol
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Tampilkan tab yang dipilih dan aktifkan tombol
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
    
    // Refresh tabel sesuai tab yang dipilih
    if (tabName === 'pelanggan') refreshCustomerTable();
    if (tabName === 'pesanan') refreshOrderTable();
    if (tabName === 'layanan') refreshServiceTable();
    if (tabName === 'karyawan') refreshEmployeeTable();
    if (tabName === 'keuangan') refreshReportTable();
}
