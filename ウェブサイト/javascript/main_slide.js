
const main_images = [
  "image/main/slideshow/classroom.jpg",
  "image/main/slideshow/sea.jpg",
  "image/main/slideshow/anemone.jpg"
];

const main_img0 = document.getElementById("main_slide_img_0");
const main_img1 = document.getElementById("main_slide_img_1");
const main_img2 = document.getElementById("main_slide_img_2");
const main_prev = document.querySelector(".main_prev");
const main_next = document.querySelector(".main_next");

let main_current = 1; // 真ん中の画像

const main_image_n = main_images.length;

function main_updateImages() {
    const main_prevIndex = (main_current - 1 + main_image_n) % main_image_n;
    const main_nextIndex = (main_current + 1) % main_image_n;

    main_img0.src = main_images[main_prevIndex];
    main_img1.src = main_images[main_current];
    main_img2.src = main_images[main_nextIndex];

        // === 中央だけ強調 ===
    main_img0.classList.remove("active");
    main_img1.classList.add("active");
    main_img2.classList.remove("active");
}

// 初期表示
main_updateImages();

main_next.addEventListener("click", () => {
    main_current = (main_current + 1) % main_image_n;
    main_updateImages();
    main_animate(1);
});

main_prev.addEventListener("click", () => {
    main_current = (main_current - 1 + main_image_n) % main_image_n;
    main_updateImages();
    main_animate(-1);
});

