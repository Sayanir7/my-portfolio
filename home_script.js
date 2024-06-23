document.addEventListener('DOMContentLoaded', (event) => {
    const target = document.querySelector('#animateMe');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    }, { threshold: 0.2 }); // Trigger when 50% of the div is visible

    observer.observe(target);
});


document.addEventListener('DOMContentLoaded', (event) => {
    const target = document.querySelector('#skilldiv1');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ani');
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the div is visible

    observer.observe(target);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const target = document.querySelector('#skilldiv2');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ani');
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the div is visible

    observer.observe(target);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const target = document.querySelector('#skilldiv3');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ani');
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the div is visible

    observer.observe(target);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const target = document.querySelector('#skilldiv4');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ani');
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the div is visible

    observer.observe(target);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const target = document.querySelector('#skilldiv5');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ani');
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the div is visible

    observer.observe(target);
});

