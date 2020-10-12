$(document).ready(function () {


  $("li.dropdown-item").on("click", function (e) {
    $(this).parents("ul.dropdown-menu.show").removeClass("show");
    $(this).parents("li.nav-item.dropdown.show").removeClass("show");
    $(this)
      .parents("div.collapse")
      .prev("div.hamburger-menu.navbar-toggler")
      .addClass("collapsed");
  });

  $("li#list-item").on("click", function (e) {
    $(this).parents("div.collapse.navbar-collapse").toggleClass("show");
    $(this)
      .parents("div.navbar-right")
      .children("div.navbar-toggler")
      .children("span.navbar-toggler-icon")
      .toggleClass("change");
  });

  $("li.dropdown-item").on("click", function (e) {
    $(this).parents("div.collapse.navbar-collapse.show").removeClass("show");
    $(this)
      .parents("div.navbar-right")
      .children("div.navbar-toggler")
      .children("span.navbar-toggler-icon")
      .toggleClass("change");
  });

  let nanBarTogglerIcon = document.querySelector(".navbar-toggler-icon");
  let navItemDropdowns = document.querySelectorAll("li.nav-item.dropdown");

  nanBarTogglerIcon.addEventListener("click", function (e) {
    nanBarTogglerIcon.classList.toggle("change");
  });

  navItemDropdowns.forEach((navItem) =>
    navItem.addEventListener("mouseover", function () {
      navItem.classList.add("show");
      let dropdownMenus = navItem.querySelector("ul.dropdown-menu");
      dropdownMenus.classList.add("show");
    })
  );

  navItemDropdowns.forEach((navItem) =>
    navItem.addEventListener("mouseleave", function () {
      navItem.classList.remove("show");
      let dropdownMenus = navItem.querySelector("ul.dropdown-menu");
      dropdownMenus.classList.remove("show");
    })
  );

  let gallery = document.querySelector('div.img-gallery.owl-carousel');
  $('.img-gallery').owlCarousel({
    rtl: true,
    nav: false,
    items: 3,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      }
    }
  });

  let videoGallery = document.querySelector('div#video-gallery.owl-carousel');
  $('#video-gallery').owlCarousel({
    rtl: true,
    nav: true,
    items: 1,
    dots: false,
    center: true,
    video: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });


  let mediaPlayer = document.querySelector('.myplayer');
  let video = mediaPlayer.querySelector('video');
  let controls = mediaPlayer.querySelector('.myplayer__controls')
  let play = controls.querySelector('.play');
  let fwd = controls.querySelector('.forward');
  let rwd = controls.querySelector('.rewind');
  let timer = controls.querySelector('.timer')
  let currentTime = timer.querySelector('.currentTime');
  let videoTime = timer.querySelector('.videoTime');
  let progressBar = controls.querySelector('.controls__progressbar-current');
  let volumeIcon = controls.querySelector('.volume .icon')
  let volumeProgressBar = controls.querySelector('.volume .volume__progress')
  let volumeInput = volumeProgressBar.querySelector('input')
  let fullScreen = controls.querySelector('.fullscreen')

  fullScreen.addEventListener('click', function () {
    if (!document.fullscreenElement) {
      if (mediaPlayer.requestFullscreen) {
        mediaPlayer.requestFullscreen();
      } else if (mediaPlayer.mozFullScreenElement) {
        mediaPlayer.mozFullScreenElement()
      } else if (mediaPlayer.msFullscreenElement) {
        mediaPlayer.msFullscreenElement()
      } else if (mediaPlayer.webkitFullscreenElement) {
        mediaPlayer.webkitFullscreenElement()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
      } else if (document.msCancelFullscreen) {
        document.msCancelFullscreen();
      } else if (document.webkitCancelFullscreen) {
        document.webkitCancelFullscreen();
      }
    }
  })

  video.volume = .5;
  volumeIcon.addEventListener('click', function () {
    volumeProgressBar.classList.toggle('active');
  })
  volumeInput.addEventListener('input', function () {
    video.volume = this.value / 100;
    volumeInput.style = `background: linear-gradient(90deg, #32ff6a ${this.value}%, #e1e1e1 0%);`
  })

  video.addEventListener('timeupdate', function () {
    currentTime.textContent = getTime(video.currentTime);

    let timeTotal = video.duration - video.currentTime
    videoTime.textContent = getTime(timeTotal);

    let barLength = (video.currentTime / video.duration) * 100
    progressBar.style = `background: linear-gradient(90deg, #32ff6a ${barLength}%, #e1e1e1 0%);`
    progressBar.value = barLength;

  });
  progressBar.addEventListener('input', function () {
    video.currentTime = (this.value / 100) * video.duration;
  })

  play.addEventListener('click', function () {


    if (video.paused) {
      togglePlayicon();
      video.play();
    } else {
      togglePlayicon();
      video.pause();
    }

  })

  rwd.addEventListener('click', function () {
    let icon = rwd.querySelector('i');

    video.currentTime = video.currentTime - 5;

  })
  fwd.addEventListener('click', function () {

    video.currentTime = video.currentTime + 5;

  })


  function togglePlayicon() {
    let icon = play.querySelector('i');
    icon.classList.toggle('ion-md-pause');
    icon.classList.toggle('ion-md-play')


  }

  function getTime(timer) {
    let minutes = Math.floor(timer / 60);
    let hours = Math.floor(minutes / 60);
    let seconds = Math.floor(timer - (minutes * 60));

    let minutesValue;
    let secondsValue;
    let hourValue;

    if (hours < 10) {
      hourValue = '0' + hours
    } else {
      hourValue = hours
    }

    if (minutes < 10) {
      minutesValue = '0' + minutes
    } else {
      minutesValue = minutes
    }

    if (seconds < 10) {
      secondsValue = '0' + seconds
    } else {
      secondsValue = seconds;
    }

    return hourValue + ":" + minutesValue + ":" + secondsValue;
  }

});
