const elementAMasajes = document.getElementById('ruta-header-Masaje');
const elementProteccion = document.getElementById('ruta-header-Proteccion');
const elementAManicura = document.getElementById('ruta-header-Manicura');
const elementACejas = document.getElementById('ruta-header-Cejas');
const elementAPestanas = document.getElementById('ruta-header-Pestañas');
const elementACita = document.getElementById('ruta-header-cita');
const elementAHome = document.getElementById('ruta-header-Home');


const userInfo = async (uidUser) => {
  const userData = await fetch(`http://localhost:3200/api/users/${uidUser}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const userResult = await userData.json();
  console.log(userResult);
  return userResult;
}

document.addEventListener('DOMContentLoaded', () => {
  const uid = window.location.pathname.split('/')[1];

  userInfo(uid)
    .then((user) => console.log(user))
    .catch((error) => console.log(error))

  if (uid) {
    elementAHome.addEventListener('click', () => {
      window.location.href = `/${uid}`;
    });
    elementACejas.addEventListener('click', () => {
      window.location.href = `/${uid}/cejas`;
    });
    elementAMasajes.addEventListener('click', () => {
      window.location.href = `/${uid}/Masajes`
    })
    elementProteccion.addEventListener('click', () => {
      window.location.href = `/${uid}/proteccion`
    })
    elementAManicura.addEventListener('click', () => {
      window.location.href = `/${uid}/Manicura`
    })
    elementAPestanas.addEventListener('click', () => {
      window.location.href = `/${uid}/pestana`
    })
    elementACita.addEventListener('click', () => {
      window.location.href = `/${uid}/cita`
    })
  } else {
    elementAHome.addEventListener('click', () => {
      window.location.href = `/`;
    });
    elementACejas.addEventListener('click', () => {
      window.location.href = `/cejas`;
    });
    elementAMasajes.addEventListener('click', () => {
      window.location.href = `/Masajes`
    })
    elementProteccion.addEventListener('click', () => {
      window.location.href = `/proteccion`
    })
    elementAManicura.addEventListener('click', () => {
      window.location.href = `/Manicura`
    })
    elementAPestanas.addEventListener('click', () => {
      window.location.href = `/pestana`
    })
    elementACita.addEventListener('click', () => {
      window.location.href = `/iniciosesion`
    })
  }
})