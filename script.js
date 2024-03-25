function changePage(option) {
    if (option === 'yes') {
      document.getElementById('landingPage').style.display = 'none';
      document.getElementById('page2').style.display = 'block';
      document.getElementById('page3').style.display = 'none'; 
    } else if (option === 'no') {
      document.getElementById('landingPage').style.display = 'none';
      document.getElementById('page2').style.display = 'none'; 
      document.getElementById('page3').style.display = 'block';
    } else {
      document.getElementById('landingPage').style.display = 'block'; 
      document.getElementById('page2').style.display = 'none';
      document.getElementById('page3').style.display = 'none';
    }
}
