function mostarAd(){
    document.getElementById('admin-Empresas').style.display = 'flex';
    document.getElementById('admin-Productos').style.display = 'none';
    document.getElementById('motorista').style.display = 'none';
    document.getElementById('ordenes').style.display = 'none';
}
function mostarProductos(){
    document.getElementById('admin-Empresas').style.display = 'none';
    document.getElementById('admin-Productos').style.display = 'flex';
    document.getElementById('motorista').style.display = 'none';
    document.getElementById('ordenes').style.display = 'none';
}
function mostarMotoristas(){
    document.getElementById('admin-Empresas').style.display = 'none';
    document.getElementById('admin-Productos').style.display = '';
    document.getElementById('motorista').style.display = 'flex';
    document.getElementById('ordenes').style.display = 'none';
}
function mostarOrdenes(){
    document.getElementById('admin-Empresas').style.display = 'none';
    document.getElementById('admin-Productos').style.display = 'none';
    document.getElementById('motorista').style.display = 'none';
    document.getElementById('ordenes').style.display = 'flex';
}