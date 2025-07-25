    window.addEventListener('keydown', function(e) {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p')) {
        document.body.style.filter = 'blur(8px)';
        alert('Screenshot is disabled on this page.');
      }
    });
    
    document.querySelectorAll('img').forEach(img => {
      img.ondragstart = () => false;
    });
    
    function openPreview(src) {
      document.getElementById('previewImage').src = src;
      document.getElementById('previewModal').style.display = 'block';
    }
    
    function closePreview() {
      document.getElementById('previewModal').style.display = 'none';
    }