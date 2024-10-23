const index = (req, res) => {
 	res.render('index', { title: 'Express' }); 
}; 

//buat controller untuk halaman kontak
const kontak = (req, res) => {
    res.render('kontak', { title: 'Express'});
};
// const mahasiswa = (req, res) => {
//  	res.render('mahasiswa', { title: 'Express' }); 
// }; 
module.exports = { index, kontak}; 
