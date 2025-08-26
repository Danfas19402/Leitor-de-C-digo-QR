/* ----- Tema claro/escuro ----- */
const themeToggle = document.getElementById('themeToggle');

function setTheme(mode){
  if(mode === 'dark'){
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  localStorage.setItem('theme', mode);
}

// carregar tema salvo
const saved = localStorage.getItem('theme') || 'light';
setTheme(saved);

// botão alternar
themeToggle.addEventListener('click', ()=>{
  const dark = document.body.classList.contains('dark');
  setTheme(dark ? 'light' : 'dark');
});
