function info() {
  window.alert('로그아웃 되었습니다.');
}

document.addEventListener('DOMContentLoaded', function () {
  const image = document.getElementById('item');

  function change() {
    if (image) {
      image.src = './img/item2_green.png';
    } else {
      console.error('이미지를 찾을 수 없습니다.');
    }
  }

  // 이벤트 추가 예시 (a 태그에 마우스를 올렸을 때 실행)
  document.getElementById('link').addEventListener('mouseover', change);
});

document.addEventListener('DOMContentLoaded', function () {
  const image = document.getElementById('item');

  function changeback() {
    if (image) {
      image.src = './img/item2.png';
    } else {
      console.error('이미지를 찾을 수 없습니다.');
    }
  }

  // 이벤트 추가 예시 (a 태그에 마우스를 나왔을 때 실행)
  document.getElementById('link').addEventListener('mouseleave', changeback);
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#input').addEventListener('mouseover', () => {
    document.getElementById('input_item').src = './img/입고_green.png';
  });

  document.querySelector('#input').addEventListener('mouseleave', () => {
    document.getElementById('input_item').src = './img/입고.png';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#output').addEventListener('mouseover', () => {
    document.getElementById('output_item').src = './img/출고_green.png';
  });

  document.querySelector('#output').addEventListener('mouseleave', () => {
    document.getElementById('output_item').src = './img/출고.png';
  });
});

